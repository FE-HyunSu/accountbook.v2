## 💵 리액트 스터디 모임 정산 페이지 (ver2)

### 🏂 URL 
- page : https://tubular-cocada-39cf07.netlify.app

### 👨‍🔧 개요

- 기존 react nextjs로 작업했던 Accountbook를 project를 Typescript 버전으로 migration.
- Firebase 로그인 적용.
- Recoil로 상태관리 적용.
- 폴더 및 파일구조 정리.

### 🪬 내용

- 정산내역 기록용으로 생성.
- 카뱅 UI를 참고함.
- `React` `NextJS` `Typescript` `Netlify` `firebase` `firestore` `Recoil`

### 🧾 데이터 관리

- Firebase Firestore
- 멤버 정보. { `id` : 고유값, `userName` : 이름, `imgUrl` : 프로필 이미지 }
- 입출금 내역. { `targetId` : 멤버id, `dateTime` : 날짜, `description` : 내용, `calculation` : 금액 }
