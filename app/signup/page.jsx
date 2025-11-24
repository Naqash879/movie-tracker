"use client";
import Link from "next/link";
import InputField from "@/components/InputField";
import { useState } from "react";
import FormButton from "@/components/FormButton";

function Signup() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setError("Password and Confirm Password did not match");
      return;
    }
    setError("");
    const formattedFirstName =
      firstName.trim().charAt(0).toUpperCase() +
      firstName.trim().slice(1).toLowerCase();
    setfirstName(formattedFirstName);
    const formattedLastName =
      lastName.trim().charAt(0).toUpperCase() +
      lastName.trim().slice(1).toLowerCase();
    setLastName(formattedLastName);

    const url = "http://localhost:8000/api/users";
    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    };
    try {
      const response = await fetch(url, requestOption);
      const data = await response.json();
      if (data.ok) {
        alert(data.message);
      } else {
        alert(`Error: ${data.message || "Registration failed"}`);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="pt-10 mx-11 w-[293px] h-[100.79px] sm:w-[393] sm:mx-40 md:w-[393] md:mx-80 lg:w-[393] lg:mx-100  xl:w-[393] xl:mx-110 2xl:w-[393] 2xl:mx-200 2xl:my-30">
        <h1 className="text-[40px] font-bold text-center">Movie Maker</h1>

        <form
          className="flex flex-col mt-8 gap-2"
          onSubmit={(e) => handleSubmit(e)}
        >
          <InputField
            placeholder="FirstName"
            name="firstname"
            type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value.trim())}
            required
          />
          <InputField
            placeholder="LastName"
            name="lastname"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <InputField
            placeholder="Email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <InputField
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <InputField
            placeholder="Confirm Password"
            name="confirm-password"
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <FormButton type="submit">Sign Up</FormButton>
        </form>
        <div className="text-lg text-red-800 flex justify-center">{error}</div>
        <span className="mt-5 ml-5 text-[15px]">
          Already have an account?{" "}
          <Link href={"/login"} className="font-semibold text-gray-600">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;
