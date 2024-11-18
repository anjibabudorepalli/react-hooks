import { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} type="text" placeholder="Custom Input" />;
});

export default CustomInput;
