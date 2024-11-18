import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    if (inputRef.current) {
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the Button to focus me"
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
