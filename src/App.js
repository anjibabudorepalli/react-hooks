import "./styles.css";
// import { useContext } from "react";
// import { UserProvider } from "./context/userContext";
// import DisplayUser from "./displayUser";
// import Counter from "./reducer/Counter";
// import Parnet from "./callback/Parent";
// import FactorialCalculator from "./usememo/FactorialCalculator";
// import InputFocus from "./useRef/InputFocus";
// import Parent from "./forwardRef/Parent";
// import Parent from "./useImpertiveHandle/Parent";
// import WindowSizeComponent from "./customHook/WindowSize";
// import ParentComponent from "./memo/Parent";
import Child from "./useMemoWithContext/Child";
import { CounterContext } from "./useMemoWithContext/CounterContext";
import { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const contextValue = useMemo(() => ({ count, setCount }), [count]);

  return (
    <div className="App">
      {/* <DisplayUser /> */}
      {/* <Counter /> */}
      {/* <Parnet /> */}
      {/* <FactorialCalculator /> */}
      {/* <InputFocus /> */}
      {/* <Parent /> */}
      {/* <Parent /> */}
      {/* <WindowSizeComponent /> */}
      {/* <ParentComponent /> */}
      <CounterContext.Provider value={contextValue}>
        <Child />
      </CounterContext.Provider>
    </div>
  );
}
