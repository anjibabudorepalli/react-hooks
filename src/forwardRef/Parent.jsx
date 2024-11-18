import { useRef } from "react";
import ChildFyncButton from "./Child";

const Parent = () => {
  const buttonRef = useRef(null);
  const handleClick = () => {
    if (buttonRef.current) {
      console.log("Ref", buttonRef.current);
      buttonRef.current.focus();
      buttonRef.current.style.backgroundColor = "yellow"; // Change background color
      buttonRef.current.style.color = "blue"; // Change text color (optional)
    }
  };
  return (
    <>
      <ChildFyncButton ref={buttonRef}>Click Me</ChildFyncButton>
      <button onClick={handleClick}>Focus the Fancy Button</button>
    </>
  );
};

export default Parent;
