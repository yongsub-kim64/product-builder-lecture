---
title: "자동매매 분할익절이 실행되지 않은 이유 — 로직보다 중요한 scheduler 실행 경로"
date: 2026-06-01
excerpt: "분할익절 설정은 활성화되어 있었고, rule_engine 로직도 구현되어 있었다. 그런데 장중 5분 매도 루프에서 실제 보유수량과 partial_sold 상태가 전달되지 않아 PARTIAL_SELL이 구조적으로 발생할 수 없었다. 수정 방향은 rule_engine이 아니라 scheduler.py의 배선 오류를 바로잡는 것이었다."
tags: ["자동매매", "분할익절", "실계좌", "stock-auto-trade"]
published: true
showInLog: true
project_tag: "자동매매"
project_link: "stock-auto-trade"
---

오늘 실거래 로그를 점검했다. 장중 보유 종목 1건이 매수 후 트레일링스탑으로 매도되어 수익 실현으로 종료됐다. 겉으로 보면 정상적인 거래였다.

그런데 로그를 따라가면서 이상한 지점을 발견했다. 수익률이 분할익절 임계값을 넘어섰는데도 분할익절이 한 번도 실행되지 않았다.

## 처음엔 rule_engine을 의심했다

`PARTIAL_SELL_ENABLED = True`, 임계 수익률, 분할 비율 — 설정은 다 켜져 있었다. `rule_engine.check_sell_signal`에서 PARTIAL_SELL을 0순위로 처리하는 로직도 구현되어 있었다.

그래서 처음엔 조건식이 잘못됐거나 threshold 계산이 틀렸을 거라고 의심했다. 하지만 직접 로직을 검토해 보니 rule_engine은 아무 문제가 없었다.

## 실제 원인: 필요한 값이 전달되지 않았다

원인은 다른 곳에 있었다. 장중 5분 매도 루프를 담당하는 `scheduler.py`의 `job_intraday_sell`에서 `check_sell_signal`을 호출할 때 두 가지 값이 빠져 있었다.

- `total_qty`: 실제 계좌 보유수량 (기본값 0으로 전달되고 있었음)
- `partial_sold`: 이미 분할익절을 했는지 여부 (누락)

`check_sell_signal` 내부에서 PARTIAL_SELL 분기는 `total_qty > 0`인 경우에만 작동한다. 0이 전달되면 이 조건이 항상 False가 되어 PARTIAL_SELL은 구조적으로 반환될 수 없었다.

`rule_engine` 로직은 완벽했다. 실행 경로가 끊겨 있었을 뿐이다.

## 수정: scheduler에서 실제 상태값을 연결했다

수정 방향은 분명했다. `job_intraday_sell`에서 실제 계좌 보유수량을 읽어 `total_qty`로 전달하고, `order_log.json`의 BUY 항목에서 `partial_sold` 상태를 읽어 함께 넘기는 것이다.

수정 후 실행 흐름은 다음과 같다.

1. 장중 5분 루프 진입
2. 실계좌 잔고에서 `qty` 조회
3. `order_log.json` BUY 항목에서 `partial_sold` 상태 조회
4. `check_sell_signal(code, avg_price, hold_days, peak_price, total_qty=qty, partial_sold=partial_sold)` 호출
5. 수익률 ≥ 임계값이고 `partial_sold=False`이면 → `PARTIAL_SELL` 반환
6. `floor(qty × PARTIAL_SELL_RATIO)` 수량 매도 실행
7. `partial_sold=True` 저장
8. 다음 루프에서 `partial_sold=True` 재조회 → 두 번째 분할익절 방지
9. 잔여수량은 트레일링스탑으로 계속 관리

## 엣지 케이스 검증

수정 후 아래 케이스를 점검했다.

**total_qty=1일 때**: `floor(1 × 0.5) = 0`. 0주 주문은 발생하지 않도록 처리됨.

**partial_sold=True 이후**: 두 번째 루프에서 `partial_sold=True`가 읽히면 PARTIAL_SELL 분기에 진입하지 않음. 잔여수량 전체가 트레일링스탑 관리 대상이 됨.

**잔여수량=0 이후**: 분할익절 후 잔여수량이 0이면 트레일링 피크 제거, 당일 매도 기록 처리됨.

## 추가 발견: 로그가 민감정보 유출 경로가 될 수 있다

로그를 점검하면서 다른 문제도 함께 발견했다. 텔레그램 API를 호출할 때 HTTP 요청 URL이 로그에 그대로 출력되고 있었다. URL에는 봇 토큰이 포함되어 있었다. 계좌 식별자 일부도 로그에 평문으로 남아 있었다.

조치 내용은 다음과 같다.

- 텔레그램 봇 토큰 재발급
- `telegram_alert.py`에 로그 마스킹 필터(`_RedactingFilter`) 적용
- `httpx`, `httpcore`, `telegram` 로그 레벨을 WARNING으로 조정해 INFO 레벨 HTTP 로그 차단
- `scheduler.py`의 계좌 식별자 직접 출력부 마스킹
- 기존 로그 파일 소급 마스킹 도구(`tools/mask_logs.py`) 작성

## 오늘 정리한 운영 원칙

자동매매 시스템에서 "로직이 구현되어 있다"와 "실제로 실행된다"는 전혀 다르다. 확인해야 할 체크리스트는 다음과 같다.

1. 설정값이 활성화되어 있는가
2. rule_engine 로직이 구현되어 있는가
3. scheduler 실행 경로에서 해당 함수가 호출되는가
4. 필요한 상태값이 실제로 전달되는가
5. 실행 결과가 저장되는가
6. 다음 루프에서 저장 상태가 재조회되는가
7. 로그에 민감정보가 남지 않는가

## 다음 실거래에서 확인할 항목

- `PARTIAL_SELL` 판단 로그 발생 여부
- 실제 보유수량 기준 수량 계산 확인
- `partial_sold=True` 저장 여부
- 다음 5분 루프에서 `partial_sold=True` 재조회 여부
- 잔여수량 트레일링스탑 연속 관리 여부
- 로그에 토큰·계좌 식별자 미출력 여부

→ [자동매매에서 중요한 것은 로직보다 실행 경로다](/insight/insight-037/)  
→ [자동매매 프로젝트 전체 기록](/projects/stock-auto-trade/)

---
> ※ 본 콘텐츠는 개인 자동매매 프로그램 운영 중 발견한 실행 경로와 로그 보안 점검 기록입니다.  
> 투자 권유가 아니며, 투자의 판단과 책임은 본인에게 있습니다.
