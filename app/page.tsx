"use client";
// app/layout.tsx
import "./globals.css";

import SearchBar from "../components/SearchBar";
import FormButton from "../components/FormButton";

function Main() {
  return (
    <main>
      <FormButton onClick={() => alert("CLICKED")}>Someting</FormButton>
    </main>
  );
}
export default Main;
