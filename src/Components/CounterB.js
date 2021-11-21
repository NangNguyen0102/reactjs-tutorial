import React, { useContext } from "react";
import { Button, ButtonGroup, Badge } from "reactstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import { CounterContext } from "../AppDemoContextReducer";
import CounterC from "./CounterC";

const CounterB = () => {
  const countercontext = useContext(CounterContext);
  const { counter, dispatch } = countercontext;
  console.log(countercontext);
  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          CounterB <Badge color="secondary">{counter}</Badge>
        </Button>
        
      </ButtonGroup>
      <p />
      <ButtonGroup>
        <Button
          color="dark"
          onClick={() => dispatch({ type: "increment", payload: 5 })}
        >
          Increment
        </Button>
        <Button
          color="dark"
          onClick={() => dispatch({ type: "decrement", payload: 5 })}
        >
          Decrement
        </Button>
        <Button color="danger" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </Button>
      </ButtonGroup>
      <p />
      <CounterC/>
    </div>
  );
};

export default CounterB;
