import React, { useReducer } from "react";
import CounterA from "./Components/CounterA";
export const CounterContext = React.createContext();

const initialState = {
  value: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "increment":
      return { ...state, value: state.value + payload };
    case "decrement":
      return { ...state, value: state.value - payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const AppDemoContextReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <CounterContext.Provider value={{ counter: state.value, dispatch }}>
        Counter A {state.value}
        <CounterA />
      </CounterContext.Provider>
    </div>
  );
};

export default AppDemoContextReducer;
