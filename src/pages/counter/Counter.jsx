import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  COUNT_INCREMENT,
  COUNT_DECREMENT,
} from "../../reducers/counterReducer";
import { fetchSetData, updateCount, deleteCount } from "../../actions";

const Left = () => {
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h2>count : {count}</h2>
      <button onClick={() => dispatch(updateCount(COUNT_INCREMENT, count + 1))}>
        +
      </button>
      <button onClick={() => dispatch(updateCount(COUNT_DECREMENT, count - 1))}>
        -
      </button>
      <button onClick={() => dispatch(deleteCount())}>RESET</button>
    </>
  );
};

const Right = () => {
  const { history } = useSelector((state) => state.count);
  if (history.length <= 0) return <>No Value,,</>;

  return (
    <ul>
      {history.map((value) => (
        <React.Fragment key={value.id}>
          <li>{value.createdAt}</li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export const Counter = () => {
  // 전역 상태 가져오기 => useSelector
  // 전역 상태 바꾸기 => useDispatch
  const dispatch = useDispatch();

  // 초기값
  useEffect(() => {
    dispatch(fetchSetData());
  }, [dispatch]);

  /*
    const handleReset = async () => {
    try {
      await resetCount();
      const data = await getData();
      dispatch({ type: COUNT_SETDATA, payload: data });
    } catch (error) {
      console.log("RESET Failed,,", error);
    }
  };
  */

  return (
    <>
      <Left />
      <Right />
    </>
  );
};
