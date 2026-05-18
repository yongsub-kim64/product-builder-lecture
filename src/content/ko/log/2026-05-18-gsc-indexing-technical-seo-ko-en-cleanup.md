---
title: "GSC 색인 보류 대응을 위한 기술 SEO 및 KO/EN 구조 정리"
date: 2026-05-18
excerpt: "GSC '크롤링됨 - 현재 색인이 생성되지 않음' 대응으로 hreflang 복구, noindex sitemap 제외, trailing slash 정규화, KO/EN 콘텐츠 불일치 보정까지 네 가지를 정리했다."
tags: ["사이트운영", "GSC", "기술SEO", "hreflang", "sitemap", "KO/EN정합성"]
published: true
showInLog: true
project_tag: "chulbuji-rebrand"
---

GSC에서 '크롤링됨 - 현재 색인이 생성되지 않음' 알림을 받았다.

콘텐츠를 더 쓰기 전에 사이트 구조부터 점검하기로 했다. 검색엔진이 chulbuji.com을 어떻게 읽고 있는지부터 확인하는 것이 순서였다.

이번에 손본 항목은 네 가지다.

첫째, hreflang slug 매핑을 복구했다. KO/EN 페이지가 서로를 정확히 가리키지 않으면 검색엔진은 둘 다 애매한 상태로 둔다.

둘째, noindex 처리된 페이지를 sitemap에서 제외했다. sitemap에 올려놓고 색인하지 말라고 하면 신호가 충돌한다.

셋째, LogCard 내부 링크의 trailing slash를 정규화했다. /log/post와 /log/post/가 같은 페이지로 인식되도록 통일했다.

넷째, KO/EN 콘텐츠 불일치를 보정했다.

빌드는 225페이지 기준 오류 없이 통과했다. 6개 커밋으로 배포를 완료했다.

여기서 멈추기로 했다. _redirects 정리는 아직 손대지 않는다. GSC가 이번 변경을 어떻게 읽는지 3~7일 정도 지켜본 뒤에 2차 작업 여부를 판단할 생각이다. 한 번에 다 바꾸면 무엇이 효과를 냈는지 알 수 없다.

이번 작업은 콘텐츠를 더 쌓는 일이 아니라, 이미 있는 콘텐츠가 제대로 읽히게 만드는 일이었다.

다음 행동은 3~7일 후 GSC 색인 상태를 다시 확인하는 것이다. 변화가 없으면 2차 작업으로 _redirects 정리를 검토한다.
