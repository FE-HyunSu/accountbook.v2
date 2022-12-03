## 💵 리액트 스터디 모임 정산 페이지 (ver2)

### 🏂 URL 
- page : https://tubular-cocada-39cf07.netlify.app

### 👨‍🔧 개요

- 정산내역 기록용으로 생성.
- 카뱅 UI를 참고함.
- 기존 react nextjs로 작업했던 Accountbook를 project를 Typescript 버전으로 migration.

### 🪬 내용

- Intersection Observer API.
- `React` `NextJS` `Typescript` `Netlify` `firebase` `firestore`

### 🧾 데이터 관리

- Firebase Firestore
- 멤버 정보. { `id`: Firebase Id, `userId` : 고유값, `userName` : 이름, `imgUrl` : 프로필 이미지 }
- 입출금 내역. { `id`: Firebase Id, `targetId` : 멤버id, `dateTime` : 날짜, `description` : 내용, `calculation` : 금액 }
