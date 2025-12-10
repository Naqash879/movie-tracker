"use client";
import { useReducer, useCallback } from "react";
const initialState = {
  countA: 0,
  countB: 0,
};
function reducer(state: any, action: any) {
  console.log("%c⏳ OLD STATE:", "color: orange; font-weight: bold;", state);
  console.log("%c🎯 ACTION:", "color: cyan; font-weight: bold;", action);

  let newState = state;

  switch (action.type) {
    case "incrementA":
      newState = { ...state, countA: state.countA + 1 };
      break;

    case "decrementA":
      newState = { ...state, countA: state.countA - 1 };
      break;

    case "incrementB":
      newState = { ...state, countB: state.countB + 2 };
      break;

    case "decrementB":
      newState = { ...state, countB: state.countB - 2 };
      break;

    case "resetA":
      newState = { ...state, countA: 0 };
      break;
    case "resetB":
      newState = { ...state, countB: 0 };
      break;

    default:
      newState = state;
      break;
  }

  console.log(
    "%c✅ NEW STATE:",
    "color: lightgreen; font-weight: bold;",
    newState
  );

  console.log("--------------------------------------------------");

  return newState;
}

export default function CounterSection() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Counter A {state.countA}</p>
      <div className="flex flex-col">
        <button onClick={() => dispatch({ type: "incrementA" })}>+</button>
        <button onClick={() => dispatch({ type: "decrementA" })}>-</button>
        <button onClick={() => dispatch({ type: "resetA" })}>
          reset Counter A
        </button>
      </div>
      <p>Counter B {state.countB}</p>
      <div className="flex flex-col">
        <button onClick={() => dispatch({ type: "incrementB" })}>+</button>
        <button onClick={() => dispatch({ type: "decrementB" })}>-</button>
        <button onClick={() => dispatch({ type: "resetB" })}>
          reset Counter B
        </button>
      </div>
    </>
  );
}
