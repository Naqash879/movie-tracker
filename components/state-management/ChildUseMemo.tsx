import React from "react";

function ChildUseMemo({
  addState,
  state,
}: {
  addState: () => void;
  state: number;
}) {
  console.log("Child UseMemo component rendered");

  return (
    <div>
      <h2>Child Component</h2>
      <p>Parent State: {state}</p>
      <button onClick={addState}>Increment From Child</button>
    </div>
  );
}

export default React.memo(ChildUseMemo);
