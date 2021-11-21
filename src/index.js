import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import reportWebVitals from "./reportWebVitals";
import AppDemoContext from "./AppDemoContext";
import AppDemoReducer from "./AppDemoReducer";
import AppDemoContextReducer from "./AppDemoContextReducer";
import AppDemoReducerEffect from "./AppDemoReducerEffect";
import "bootstrap/dist/css/bootstrap.min.css";
import AppDemoMemo from "./AppDemoMemo";
import AppDemoUseRef from "./AppDemoUseRef";
import AppDemoUseHook from "./AppDemoUseHook";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <div className="row">
      <div className="col-lg">
        <p>AppDemoContextReducer.js</p>
        <AppDemoContextReducer />
        <p>AppDemoMemo.js</p>
        <AppDemoMemo/>
      </div>
      <div className="col-lg">
        <p>AppDemoContext.js</p>
        <AppDemoContext />
        <p><br/>AppDemoUseRef.js</p>
        <AppDemoUseRef/>
        <p><br/>AppDemoUseHook.js</p>
        <AppDemoUseHook/>
      </div>
      <div className="col-lg">
        <p>AppDemoReducer.js</p>
        <AppDemoReducer />
      </div>
      <div className="col-lg">
        <p>AppDemoReducerEffect.js</p>
        <AppDemoReducerEffect />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
