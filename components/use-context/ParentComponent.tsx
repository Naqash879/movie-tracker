"use client";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  return (
    <div>
      <h1>Parent Component using Context Api</h1>
      <ChildComponent />
    </div>
  );
}
