import React from "react";
import ChildComponent from "./Child";
const ParentComponent = () => {
  const [count, setCount] = React.useState(0);
  const data = { name: "John", age: 30 };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment Parent State
      </button>
      <p>Count:{count}</p>
      <ChildComponent data={data} />
    </>
  );
};

export default ParentComponent;
