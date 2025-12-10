import { useUserContext } from "@/context/UserContext";

export default function GrandChildComponent() {
  const { user, setUser } = useUserContext();
  const addUser = () => {
    setUser("Zahak");
  };
  return (
    <div>
      <h3>Grand Child Component consuming Context API</h3>
      <p>User Name: {user}</p>
      <button onClick={addUser}>Change User Name</button>
    </div>
  );
}
