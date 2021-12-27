import React, { useReducer } from "react";
import { Button, ButtonGroup, Badge } from "reactstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  value: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "increment":
      return { ...state, value: state.value + payload };
    case "decrement":
      return { ...state, value: state.value - payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          Counter1 <Badge color="secondary">{count.value}</Badge>
        </Button>
        <Button color="primary" outline>
          Counter2 <Badge color="secondary">{count2.value}</Badge>
        </Button>
      </ButtonGroup>
      <p />
      <ButtonGroup>
        <Button
          color="dark"
          onClick={() => dispatch({ type: "increment", payload: 1 })}
        >
          Increment
        </Button>
        <Button
          color="dark"
          onClick={() => dispatch({ type: "decrement", payload: 1 })}
        >
          Decrement
        </Button>
        <Button color="danger" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </Button>
      </ButtonGroup>
      <p/>
      <ButtonGroup>
        <Button
          color="dark"
          onClick={() => dispatch2({ type: "increment", payload: 5 })}
        >
          Increment
        </Button>
        <Button
          color="dark"
          onClick={() => dispatch2({ type: "decrement", payload: 5 })}
        >
          Decrement
        </Button>
        <Button color="danger" onClick={() => dispatch2({ type: "reset" })}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
