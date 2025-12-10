import GrandChildComponent from "./GrandChildComponent";

export default function ChildComponent() {
  return (
    <div>
      <h2>Child Component using Context API</h2>
      <GrandChildComponent />
    </div>
  );
}
