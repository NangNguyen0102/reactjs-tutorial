import React, { useReducer, useEffect } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  data: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_DATA":
      return {
        loading: false,
        error: "",
        data: payload,
      };

    case "SET_ERR":
      return {
        loading: false,
        error: "There are some errors",
        data: [],
      };

    default:
      return state;
  }
};

const AppDemoReducerEffect = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        dispatch({ type: "SET_DATA", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "SET_ERR" });
      });
  }, []);

  let listMarkup = (
    <ListGroup>
      {state.data.map((x) => (
        <ListGroupItem key={x.id}>
          {x.title}{" "}
          {x.completed ? (
            <Badge color="success">Completed</Badge>
          ) : (
            <Badge color="danger">Incomplete</Badge>
          )}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
  return (
    <div className="container">
      {state.loading ? "Loading..." : state.error ? state.error : listMarkup}
    </div>
  );
};

export default AppDemoReducerEffect;
