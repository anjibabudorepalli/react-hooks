import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Child = () => {
  const { count, setCount } = useContext(CounterContext);
  console.log("Child Rendered");
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Child;
