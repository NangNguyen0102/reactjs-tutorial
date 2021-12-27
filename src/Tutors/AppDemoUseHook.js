import React from "react";
import CounterHookA from "./Components/CounterHookA";
import DemoForm from "./Components/DemoForm";

const AppDemoUseHook = () => {
  return (
    <div className="container">
      <CounterHookA />
      <DemoForm />
    </div>
  );
};

export default AppDemoUseHook;
