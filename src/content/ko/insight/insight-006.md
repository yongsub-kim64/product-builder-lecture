---
title: "앱은 완성됐는데 데이터를 믿을 수 없었다"
date: 2026-03-22
excerpt: "케이던스 3648spm. 페이스 3분대와 14분대 사이를 오갔다. 앱은 작동했지만 숫자를 믿을 수 없었다. 코드를 모르는 사람이 여러 AI와 단계를 나눠 다섯 군데 버그를 잡은 날."
tags: ["ChulbujiRunbuddy", "바이브코딩", "AI협업", "달리기", "BuildingInPublic"]
published: true
project_tag: "RunBuddy"
---

오늘 5.43km, 45분 53초를 달렸다.

페이스는 평균 8분 26초. 심박은 127BPM. 숫자만 보면 그럴듯한 러닝이다.
근데 구간 기록을 열어봤더니 케이던스가 이랬다.

1구간 200spm. 2구간 3074spm. 3구간 3648spm.

사람이 1분에 3000보를 뛸 수는 없다. 이 앱, 믿으면 안 되겠다 싶었다.

<figure style="text-align:center; max-width:360px; margin:0 auto;">
  <img src="/images/insight/Runbuddy1.jpg"
       style="width:100%;"
       alt="오늘의 러닝 요약 — 5.43km / 45:53 / 8'26&quot;" />
  <figcaption>오늘의 러닝 요약 — 5.43km / 45:53 / 8'26"</figcaption>
</figure>

---

코드를 볼 줄 모른다. 어디가 문제인지 직접 찾을 수도 없다.

그래서 메타철부지한테 먼저 물었다.
"구간 케이던스가 이상해. 뭐가 문제일 것 같아?"
메타철부지가 가능한 원인을 정리해줬고, 그걸 바탕으로 Claude에게 진단을
요청했다. Claude가 문제를 구조적으로 짚어줬고, 그 결과를 지시서로
정리해서 Claude Code에 넘겼다. Claude Code가 실제 코드를 수정했다.

나는 그 사이에서 판단하고 연결했다.

케이던스만이 아니었다. 페이스가 3분대와 14분대 사이를 튀었고,
거리가 400m 단위로 점프했고, 워치와 GPS가 서로 다른 값을 내놓으면서
충돌하고 있었다. 다섯 군데의 문제를 각각 진단하고, 각각 지시했다.
"전부 고쳐줘"가 아니라 하나씩 원인을 짚고 하나씩 처리하는 방식으로.

<figure style="text-align:center; max-width:360px; margin:0 auto;">
  <img src="/images/insight/Runbuddy2.jpg"
       style="width:100%;"
       alt="러닝 기록 목록 — 3일 연속 데이터가 쌓이고 있다" />
  <figcaption>러닝 기록 목록 — 3일 연속 데이터가 쌓이고 있다</figcaption>
</figure>

---

아직 검증이 남아 있다.

수정은 됐다. 근데 달리기 앱의 데이터는 달려봐야 안다.
다음 러닝에서 구간 기록을 다시 열었을 때 케이던스가
160~180spm 사이에 조용히 앉아 있으면, 그때 고쳤다고 할 수 있다.

오늘은 기능을 추가한 날이 아니었다.
코드를 모르는 사람이, 여러 AI와 단계를 나눠서,
숫자를 믿을 수 있는 앱으로 만드는 기초를 다시 잡은 날이었다.
코칭은 그다음이다.

<figure style="text-align:center; max-width:360px; margin:0 auto;">
  <img src="/images/insight/Runbuddy3.jpg"
       style="width:100%;"
       alt="구간 기록 — 2구간 3074spm, 3구간 3648spm. 이게 문제였다" />
  <figcaption>구간 기록 — 2구간 3074spm, 3구간 3648spm. 이게 문제였다</figcaption>
</figure>

---

다음 러닝 기록, 케이던스가 정상으로 돌아왔는지 궁금하신 분 있나요?

---

*EN Summary*

**What I did:** Fixed 5 data bugs by collaborating with multiple AIs — step by step.
**What broke:** Cadence hit 3,648 spm. Pace swung between 3 and 14 min/km.
**What I learned:** I don't read code. I direct AI. That's the workflow.
