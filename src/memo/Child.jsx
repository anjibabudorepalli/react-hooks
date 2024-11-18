import React from "react";
import isEqual from "lodash/isEqual";

const ChildComponent = React.memo(
  (props) => {
    console.log("ChildComponent rendered");
    return (
      <div>
        <p>Data:{JSON.stringify(props)}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return isEqual(prevProps, nextProps);
  }
);

export default ChildComponent;
