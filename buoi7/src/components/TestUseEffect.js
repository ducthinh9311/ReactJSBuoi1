import { useState, useEffect } from "react";

export default function TestUseEffect() {
  const calc = () => {
    console.log("calc");
    return 1 - 2 + 3;
  };
  const [count, setCount] = useState(() => {
    return calc();
  });
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("mounted");
  }, [count]);
  const increase = () => {
    setCount((pre) => pre + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Plus</button>
    </div>
  );
}
/// UseEffect render 1 lần