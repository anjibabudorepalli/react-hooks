import { useReducer } from "react";
import { reducer, initialState } from "./intialState";

const Counter = () => {
  console.log("hi");
  const [state, disPatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => disPatch({ type: "increment" })}>+</button>
      <button
        onClick={() => {
          disPatch({ type: "decrement" });
        }}
      >
        _
      </button>
      <button onClick={() => disPatch({ type: "reset" })}></button>
    </div>
  );
};

export default Counter;
