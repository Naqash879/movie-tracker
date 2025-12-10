"use client";
import React, { useCallback } from "react";

export default function TodoManager() {
  const [count, setCount] = React.useState(0);
  const [input, setInput] = React.useState("");

  // useCallback with input as dependency
  const addTodo = useCallback(() => {
    console.log("addTodo called! Current input:", input); // called log
  }, []);
  React.useEffect(() => {
    console.log("addTodo function created / recreated");
  }, [addTodo]);

  console.log("Component rendered"); // logs on every render

  return (
    <div style={{ padding: "20px" }}>
      <h2>TodoManager Demo</h2>
      <p>Count: {count}</p>
      <input
        type="text"
        className="bg-amber-300 p-1"
        placeholder="Enter a value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => addTodo()}>Add Todo</button>
    </div>
  );
}
