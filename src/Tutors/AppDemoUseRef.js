import React, { useRef } from "react";

const AppDemoUseRef = () => {
  const inputRef = useRef();
  return (
    <div className="container">
      <input ref={inputRef} type="text" />
      <input type="text" />
      <input type="text" />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus
      </button>
    </div>
  );
};

export default AppDemoUseRef;
