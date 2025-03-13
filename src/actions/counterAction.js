// 비동기 통신 처리 후 dispatch 처리할 것
// middleware-! `Redux` 비동기 로직만 처리하는 미들웨어
import { COUNT_SETDATA } from "../reducers/counterReducer";
import { getData } from "../pages/counter/getData";
import { postCount, resetCount } from "../api/counter";

// 초기값 및 값 변경, 상태 patch 시 사용
// fetchSetData() 실행 시 dispatch까지 적용한 async 함수 반환
export const fetchSetData = () => {
  return async (dispatch) => {
    try {
      const data = await getData();
      dispatch({ type: COUNT_SETDATA, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

// handleDispatch, 버튼 클릭 시 서버 통신 후 상태 변경
export const updateCount = (type, newValue) => {
  return async (dispatch) => {
    try {
      await postCount(newValue);
      const data = await getData();
      dispatch({ type, payload: { ...data } });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCount = () => {
  return async (dispatch) => {
    try {
      await resetCount();
      const data = await getData();
      dispatch({ type: COUNT_SETDATA, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

/*
    const dispatch = useDispatch();

    dispatch((dispatch) => {
        dispatch({type: ..., payload:...})
    })

    1. 서버 통신이 필요 없을 때 => 동기
    dispatch({type: ..., payload:...})

    2. 서버 통신이 필요할 때 => 비동기
        dispatch(async(dispatch) => {
        const count = await getCount()
        dispatch({type: ..., payload:...})
    })
*/
