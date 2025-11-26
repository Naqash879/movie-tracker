"use client";
import Link from "next/link";
import InputField from "@/components/InputField";
import { useState } from "react";
import FormButton from "@/components/FormButton";
import { login } from "@/services/user";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import AuthGuard from "@/components/AuthGuard";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Loading...");
    const emailFormatted = email.trim().toLowerCase();
    setEmail(emailFormatted);
    try {
      const data = await login(email, password.trim());
      toast.dismiss(loadingToast);
      if (data.success) {
        toast.success(data.message || "Login successful");
        Cookies.set("user", data.user.data.id, { expires: 7 });
        router.push("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <AuthGuard isPublic={true}>
      <div className="flex flex-col ">
        <div className="pt-50 mx-10 my-30 w-[335px] h-[52.79px] sm:w-[393px] sm:mx-40 md:w-[393] md:mx-80 lg:w-[393] lg:mx-100  xl:w-[393] xl:mx-110 2xl:w-[393] 2xl:mx-200 2xl:my-10">
          <h1 className="text-[40px] font-bold text-center">Movie Maker</h1>

          <form className="flex flex-col mt-8 " onSubmit={handleSubmit}>
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

            <FormButton type="submit">Login</FormButton>
          </form>
          <span className="mt-5 ml-5 text-[15px]">
            You don’t have an account?{" "}
            <Link href={"/signup"} className="font-semibold text-gray-600">
              SignUp
            </Link>
          </span>
        </div>
      </div>
    </AuthGuard>
  );
}
export default Login;
