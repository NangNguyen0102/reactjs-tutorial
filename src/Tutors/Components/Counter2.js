import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Actions";

const Counter2 = () => {
  const counter = useSelector((state) => state.counter);
  //const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter2;
