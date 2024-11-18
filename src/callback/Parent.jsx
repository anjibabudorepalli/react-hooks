import React, { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Memoize the increment function
  const increment = useCallback(() => {
    // console.log("Increment function");
    setCount((prevCount) => prevCount + 1);
  }, []);
  //   const increment = () => {
  //     console.log("Increment function");
  //     setCount((prevCount) => prevCount + 1);
  //   };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <Child onIncrement={increment} />

      {/* Text input to demonstrate re-render without triggering the child re-render */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default Parent;
