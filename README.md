## 디렉토리 구조

```sh
counter-front
├─ README.md
├─ build
│  ├─ index.html
├─ package-lock.json
├─ package.json
├─ public
└─ src
   ├─ App.css
   ├─ App.jsx
   ├─ api
   │  ├─ axios.js
   │  ├─ counter.js
   │  └─ index.js
   ├─ index.css
   ├─ index.jsx
   ├─ pages
   │  ├─ Counter.jsx
   │  └─ index.jsx
   └─ reducer
      └─ counterReducer.js
```

## useState만으로 구현

- 하나의 컴포넌트 안에 카운터 기능 구현
- useState, useEffect

## 리듀서

리듀서는 현재 상태(count)와 액션(`dispatch({type:INCREMENT})`)을 받아서 상태를 반환하는 `함수`
=> 이전 상태 + 액션 => 새로운 상태

## 리듀서의 핵심

- 직접 상태를 변경하지 않고 새로운 상태를 반환
- 현재 상태와 액션을 받아 새로운 상태를 만듦

## 리덕스

- 카운트에 대한 전역환경 + 리듀서
- 로그인에 대한 전역환경 + 리듀서

=> 리덕스는 상태(state)를 중앙에서 관리하는 `라이브러리`
=> 우리가 구성해놓은 전역환경과 리듀서를 하나로 관리해주는 편리한 도구

## 리덕스 설치

```sh
npm install redux react-redux
```

## 디렉토리 구조

```sh

```

### store

`Redux에서 모든 상태(state)를 저장하는 중앙 저장소`

### store?

Store는 원래 데이터 저장소를 의미
예전부터 프로그래밍에서 데이터를 보관하는 개념 => Store
