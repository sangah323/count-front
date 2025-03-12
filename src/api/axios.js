import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`, // 환경 변수 활용
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

/*
  기본 설정

  URL, Header, JWT_Token 등
*/
