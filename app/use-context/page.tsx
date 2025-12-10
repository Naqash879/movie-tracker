import ParentComponent from "@/components/use-context/ParentComponent";
import UserProvider from "@/context/UserContext";
function ContextExample() {
  return (
    <div>
      <UserProvider>
        <ParentComponent />
      </UserProvider>
    </div>
  );
}
export default ContextExample;
