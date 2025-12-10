"use client";
import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";
import Cookies from "js-cookie";

export interface IUserContext {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

export default function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState("Naqash");

  useEffect(() => {
    const cookieUser = Cookies.get("user");
    if (cookieUser) setUser(cookieUser);
  }, []);

  useEffect(() => {
    Cookies.set("user", user, { expires: 7 });
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}
