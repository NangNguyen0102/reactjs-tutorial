import React, { useEffect } from "react";

let renderCount = 1;
const ComponentTestMemo = (props) => {
  useEffect(() => {
    renderCount++;
  });
  return (
    <div>
      <h6>Component Test Memo: render {renderCount} times || Counter: {props.count} </h6>
    </div>
  );
};

export default ComponentTestMemo;
