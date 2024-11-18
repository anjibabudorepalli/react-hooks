import React from "react";
function Child({ onIncrement }) {
  console.log("Child Compoent rendered");

  return (
    <div>
      <button onClick={onIncrement}>Increment Counter</button>
    </div>
  );
}

// export default React.memo(Child);
export default Child;
