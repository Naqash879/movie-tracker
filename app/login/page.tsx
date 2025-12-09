"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import InputField from "@/components/InputField";
import FormButton from "@/components/FormButton";
import { login } from "@/services/user";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import AuthGuard from "@/components/AuthGuard";
import { useRouter } from "next/navigation";
import { ILoginResponse } from "@/utils/data";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loadingToast = toast.loading("Loading...");

    const emailFormatted = email.trim().toLowerCase();
    setEmail(emailFormatted);
    const data: ILoginResponse = await login(emailFormatted, password.trim());
    toast.dismiss(loadingToast);

    const message = data?.message || "Login successful";

    if (data.success) {
      toast.success(data.message || "Login successful");
      Cookies.set("user", data?.data?.id, { expires: 8 / 24 });
      Cookies.set("token", data?.data?.token, { expires: 8 / 24 });
      toast.dismiss(loadingToast);
      router.push("/");
    } else {
      toast.error(message || "Login failed");
      toast.dismiss(loadingToast);
    }
  };

  return (
    <AuthGuard isPublic={true}>
      <div className="flex flex-col">
        <div className="pt-50 mx-10 my-30 w-[335px] h-[52.79px] sm:w-[393px] sm:mx-40 md:w-[393] md:mx-80 lg:w-[393] lg:mx-100 xl:w-[393] xl:mx-110 2xl:w-[393] 2xl:mx-200 2xl:my-10">
          <h1 className="text-[40px] font-bold text-center">Movie Maker</h1>

          <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
            <InputField
              placeholder="Email"
              name="email"
              type="text"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />

            <InputField
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />

            <FormButton type="submit">Login</FormButton>
          </form>

          <span className="mt-5 ml-5 text-[15px]">
            You don’t have an account?{" "}
            <Link href="/signup" className="font-semibold text-gray-600">
              SignUp
            </Link>
          </span>
        </div>
      </div>
    </AuthGuard>
  );
}
