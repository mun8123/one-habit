# ✅ ONE-HABIT
> 딱! 하나의 습관만 제대로 만들어보자! 작은 도전부터 기간을 늘여가며 습관을 형성
> 해 보세요. 처음에는 3일 -> 1주 -> 3주 -> 35일로 챌린지처럼 도전할 수 있습니다.

## 기획
- 정해진 일정이 없다 보니 수면 패턴이 쉽게 무너졌습니다. 이를 관리할 수 있게 해빗
  트래커를 기획하게 되었고 좀 더 성취감을 느낄 수 있게 하고자 챌린지를 추가하였습니다.
- [습관 관리 크롬 확장 앱 - One Habit(1)](https://velog.io/@moon-yerim/%EC%8A%B5%EA%B4%80-%EA%B4%80%EB%A6%AC-%ED%81%AC%EB%A1%AC-%ED%99%95%EC%9E%A5-%EC%95%B1-One-Habit)

- [습관 관리 크롬 확장 앱 - One Habit(2)](https://velog.io/@moon-yerim/%EC%8A%B5%EA%B4%80-%EA%B4%80%EB%A6%AC-%ED%81%AC%EB%A1%AC-%ED%99%95%EC%9E%A5-%EC%95%B1-One-Habit2)

## 구현 기능
- 습관 등록 기능
- 오늘의 성공 여부 체크
- 챌린지 성공 시 다음 단계 챌린지로 이동
- 챌린지 실패 시 3일 챌린지로 리셋
- 로컬 스트리지를 사용한 상태 관리

## 디렉토리 구조
```
ONE-HABIT
│  index.html
│  style.css
├─src
│	├─icons // 확장 앱 로고
│	└─js
│		├─domain
│		├─store
│		├─utils
│		├─view
│		└─constant
└─manifest.json
```
## 배포
- [크롬 웹 스토어](https://chrome.google.com/webstore/detail/one-habit/ddkealpmmnegifkjkcgkegnjikflifbg?hl=ko)