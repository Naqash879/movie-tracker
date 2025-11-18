"use client";
import Link from "next/link";
import InputField from "@/components/InputField";
import { useState } from "react";
import FormButton from "../../components/FormButton";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col ">
      <div className="pt-50 mx-10 my-30 w-[335px] h-[52.79px] sm:w-[393px] sm:mx-40 md:w-[393] md:mx-80 lg:w-[393] lg:mx-100  xl:w-[393] xl:mx-110 2xl:w-[393] 2xl:mx-200 2xl:my-10">
        <h1 className="text-[40px] font-bold text-center">Movie Maker</h1>

        <form className="flex flex-col mt-8 ">
          <InputField
            placeholder="Username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />

          <InputField
            placeholder="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <FormButton text="Login" />
        </form>
        <span className="mt-5 ml-5 text-[15px]">
          You don’t have an account?{" "}
          <Link href={"/signup"} className="font-semibold text-gray-600">
            SignUp
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Login;
