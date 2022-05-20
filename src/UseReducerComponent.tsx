import React from "react";
import { useReducer } from "react";

const initialState = {
  counter: 100,
};
type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "reset"; payload: number }
  | { type: "set"; payload: number };

const counterReducer = (state: typeof initialState, action: ACTIONTYPES) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "decrement":
      return { ...state, counter: state.counter - action.payload };
    case "reset":
      return { ...state, counter: action.payload };
    case "set":
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <div>UseReducerComponent</div>
      <div>
        <div>{state.counter}</div>
        <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
          -
        </button>
        <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
          reset
        </button>
        <button onClick={() => dispatch({ type: "set", payload: 100 })}>
          set to 100
        </button>
      </div>
    </>
  );
};

export default UseReducerComponent;
