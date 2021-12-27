import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import Posts from "./Components/Posts";
import User from "./Components/User";
import postSlice from "./Slices/postSlice";
import userSlice from "./Slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
  },
});
const AppDemoReduxToolkit = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <h1 className="text-center">DEMO REDUX TOOLKIT</h1>
        <User />
        <Posts />
      </Provider>
    </div>
  );
};

export default AppDemoReduxToolkit;
