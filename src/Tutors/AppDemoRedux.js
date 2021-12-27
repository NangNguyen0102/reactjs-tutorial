import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter2 from "./Components/Counter2";
import allReducers from "./Reducers";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const AppDemoRedux = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <h1 className="text-center">DEMO REDUX</h1>
        <Counter2 />
      </Provider>
    </div>
  );
};

export default AppDemoRedux;
