import { useRef } from "react";
import CustomInput from "./CustomInput";

const Parent = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <h1>useImperativeHandle</h1>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <button onClick={() => inputRef.current.clear()}>Clear Inputs</button>
    </div>
  );
};

export default Parent;
