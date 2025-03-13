import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authMe } from "../../actions";

export const Login = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authMe());
  };

  return (
    <>
      <h1>LOGIN</h1>
      {isLogin ? (
        <button onClick={() => dispatch(authMe())}>LOGOUT</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <button type="submit">LOGIN</button>
        </form>
      )}
    </>
  );
};
