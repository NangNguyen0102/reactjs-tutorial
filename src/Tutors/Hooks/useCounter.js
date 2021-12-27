import { useState } from "react";
const useCounter = (initial = 0, step = 1) => {
  const [counter, setCounter] = useState(initial);
  const increment = () => {
    setCounter((prevCount) => prevCount + step);
  };
  const decrement = () => {
    setCounter((prevCount) => prevCount - step);
  };
  const reset = () => {
    setCounter(initial);
  };
  return { counter, increment, decrement, reset };
};

export default useCounter;
