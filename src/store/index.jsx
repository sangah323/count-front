import { createStore } from "redux";
import { counterReducer } from "./counterReducer";

const store = createStore(counterReducer);

export { store };

/*
    전역 환경 만들기 어렵지 않음
    리액트의 기능들을 끌고와서 사용 후 환경을 구성하는 것
    환경 안에 있는 것? 상태, 패치함수 등..

    createContext, useContext

    단점
    1. 코드가 많아짐
    2. 관리해야할 것들이 한곳에 뭉쳐있음
    
    리덕스 스토어 적용
*/
