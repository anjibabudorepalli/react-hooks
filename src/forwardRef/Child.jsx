import { forwardRef } from "react";

const ChildFyncButton = forwardRef((props, ref) => {
  //   console.log(ref.current.focus);
  return (
    <>
      <button ref={ref} className="fancy-button">
        {props.children}
      </button>
    </>
  );
});

export default ChildFyncButton;
