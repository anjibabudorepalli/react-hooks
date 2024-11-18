import { useState, useMemo } from "react";

const factorial = (n) => {
  if (Number.isNaN(n)) return n;
  console.log("Calculating factorial...");
  if (n <= 0) return 1;
  // console.log(n);
  return n * factorial(n - 1);
};

function FactorialCalculator() {
  const [number, setNumber] = useState(5);
  const [text, setText] = useState("");

  const factorialResult = useMemo(() => factorial(number), [number]);
  return (
    <div>
      <h1>Factorial Calculator</h1>

      {/* Input for number */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
        placeholder="Enter a number"
      />
      <p>
        Factorial of {number}: {factorialResult}
      </p>

      {/* A second input to demonstrate re-rendering */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>Typed Text: {text}</p>
    </div>
  );
}

export default FactorialCalculator;
