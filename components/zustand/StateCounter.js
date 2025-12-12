"use client";
import { useState } from "react";

function StateCounter() {
  const [count, setCount] = useState(0);

  console.log("LocalCounter re-rendered");

  return (
    <div>
      <h2>Local State Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default StateCounter;
