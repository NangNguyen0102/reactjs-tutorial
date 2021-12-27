import React, { useState, useMemo } from "react";
import ComponentTestMemo from "./Components/ComponentTestMemo";
import ComponentTestMemo2 from "./Components/ComponentTestMemo2";

const AppDemoMemo = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const incCounterA = () => {
    setCountA(countA + 1);
  };
  const incCounterB = () => {
    setCountB(countB + 1);
  };
  const memoComponentTest = useMemo(() => {
    return <ComponentTestMemo count={countA} />;
  }, [countA]);
  return (
    <div className="container">
      {/* <ButtonGroup>
        <Button color="primary" onClick={() => setIsUseMemo(true)}>
          Use Memo
        </Button>
        <Button color="primary" onClick={() => setIsUseMemo(false)}>
          Don't use memo
        </Button>
      </ButtonGroup> */}
      Counter : {countA}
      <p>
        <button onClick={incCounterA}>Increment A</button>
        <button onClick={incCounterB}>Increment B</button>
      </p>
      {memoComponentTest}
      <ComponentTestMemo2 count={countB} />
    </div>
  );
};

export default AppDemoMemo;
