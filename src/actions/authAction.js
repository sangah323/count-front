import { AUTH_SUCCESS, AUTH_FAILED } from "../reducers/authReducer";

export const authMe = () => {
  return async (dispatch, getState) => {
    try {
      const { isLogin } = getState().auth;

      isLogin
        ? dispatch({ type: AUTH_FAILED })
        : dispatch({ type: AUTH_SUCCESS });
    } catch (error) {
      console.log("Auth Failed,,", error);
    }
  };
};

/*
    getState

     : Redux의 현재 스토어 상태를 가져옴
     : dispatch와 함께 사용하여 현재 상태를 기반으로 액션을 실해ㅐㅇ
*/
