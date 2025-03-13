const init = {
  isLogin: false,
};

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILED = "AUTH_FAILED";

export const authReducer = (state = init, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { isLogin: true };
    case AUTH_FAILED:
      return { isLogin: false };
    default:
      return state;
  }
};
