import React from "react";
import { Button, ButtonGroup, Badge } from "reactstrap";
import useCounter from "../Hooks/useCounter";

const CounterHookA = () => {
  const { counter, increment, decrement, reset } = useCounter(1, 5);
  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          CounterA <Badge color="secondary">{counter}</Badge>
        </Button>
      </ButtonGroup>
      <p />
      <ButtonGroup>
        <Button color="dark" onClick={() => increment()}>
          Increment
        </Button>
        <Button color="dark" onClick={() => decrement()}>
          Decrement
        </Button>
        <Button color="danger" onClick={() => reset()}>
          Reset
        </Button>
      </ButtonGroup>
      <p />
    </div>
  );
};

export default CounterHookA;
