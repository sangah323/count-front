import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { counterReducer2 } from "./counterReducer2";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  count: counterReducer,
  count2: counterReducer2,
});

export default rootReducer;

/*
    리듀서를 하나의 함수로 묶어서 내보냄

    const {count} = combineReducer.count
    const combineReducers = {
      count: () => {
            count:0
        },
      count2: () => {
            count:0
        },

    };
*/
/*
    *useSeletor 사용시*

    count 함수를 불러와서 count를 뽑아옴
    const {count} = useSeletor((state) => state.count)
*/

/*
    값이 서로 다른 리듀서 함수로 구성된 객체를 하나의 리듀서 함수로 결합해야 할 때
    => 하나로 합쳐서 내보낼 때
    => 상태를 반환하는 함수 => 리듀서 => 하나로 관리할 수 있게끔

    *주의
    리듀서는 절대 `undefined`면 안됨-!
    => return 반환값이 무조건 존재해야 함
    => return {...staste} 또는 state
*/
