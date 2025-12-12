"use client";
import React from "react";
import { useAtom, atom } from "jotai";

const item = atom(0);
function JotaiCounter() {
  const [count, setCount] = useAtom(item);

  console.log("JotaiCounter re-rendered");

  return (
    <div>
      <h2>Jotai Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default JotaiCounter;
