"use client";
import { createContext, useContext, useState, PropsWithChildren } from "react";
interface IUpdateFormContext {
  showUpdateForm: boolean;
  setShowUpdateForm: React.Dispatch<React.SetStateAction<boolean>>;
}
export const UpdateFormContext = createContext<IUpdateFormContext | undefined>(
  undefined
);

export function UpdateFormProvider({ children }: PropsWithChildren) {
  const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false);

  return (
    <UpdateFormContext.Provider value={{ showUpdateForm, setShowUpdateForm }}>
      {children}
    </UpdateFormContext.Provider>
  );
}
export function useUpdateForm() {
  const context = useContext(UpdateFormContext);
  if (!context) {
    throw new Error("useUpdateForm must used in UpdateFormProvider");
  }
  return context;
}
