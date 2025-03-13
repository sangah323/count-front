import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT, RESET } from "../../reducers/counterReducer2";

export const Counter2 = () => {
  const { count } = useSelector((state) => state.count2);
  const dispatch = useDispatch();
  return (
    <>
      <h2>count : {count}</h2>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: RESET })}>RESET</button>
    </>
  );
};
