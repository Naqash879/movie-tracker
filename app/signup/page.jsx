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

  return (
    <div className="flex flex-col ">
      <div className="pt-10 mx-11 w-[293px] h-[100.79px] sm:w-[393] sm:mx-40 md:w-[393] md:mx-80 lg:w-[393] lg:mx-100  xl:w-[393] xl:mx-110 2xl:w-[393] 2xl:mx-200 2xl:my-30">
        <h1 className="text-[40px] font-bold text-center">Movie Maker</h1>

        <form className="flex flex-col mt-8 gap-2">
          <InputField
            placeholder="FirstName"
            name="firstname"
            type="text"
            value={firstName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputField
            placeholder="LastName"
            name="lastname"
            type="text"
            value={lastName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputField
            placeholder="Email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            placeholder="Confirm Password"
            name="confirm-password"
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <FormButton>Sign Up</FormButton>
        </form>
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
