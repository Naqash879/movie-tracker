"use client";
import ChildUseMemo from "./ChildUseMemo";
import { useCallback, useState } from "react";

function Parent() {
  console.log("Parent component rendered");

  const [state, setState] = useState(0);

  const addState = useCallback(() => {
    console.log("Rendering addState function called");
    setState((prev) => prev + 1);
  }, []);

  return (
    <div className="flex flex-col">
      <h1>Parent Component</h1>

      <ChildUseMemo addState={addState} state={state} />
    </div>
  );
}

export default Parent;
