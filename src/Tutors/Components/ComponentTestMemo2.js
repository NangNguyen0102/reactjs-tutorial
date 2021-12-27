import React, { useEffect } from "react";

let renderCount = 1;
const ComponentTestMemo2 = (props) => {
  useEffect(() => {
    renderCount++;
  });
  return (
    <div>
      <h6>Component Test Memo2: render {renderCount} times || Counter: {props.count} </h6>
    </div>
  );
};

export default ComponentTestMemo2;
