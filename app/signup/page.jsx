"use client";

import Link from "next/link";
import InputField from "@/components/InputField";
import { useState } from "react";
import FormButton from "@/components/FormButton";
import { register } from "@/services/user";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import AuthGuard from "@/components/AuthGuard";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const route = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Loading...");
    if (password !== confirmPassword) {
      toast.dismiss(loadingToast);
      toast.error("Password and Confirm Password did not match");
      return;
    }

    const formattedFirstName =
      firstName.trim().charAt(0).toUpperCase() +
      firstName.trim().slice(1).toLowerCase();

    const formattedLastName =
      lastName.trim().charAt(0).toUpperCase() +
      lastName.trim().slice(1).toLowerCase();

    try {
      const data = await register(
        formattedFirstName,
        formattedLastName,
        email,
        password
      );

      toast.dismiss(loadingToast);

      if (data.success) {
        toast.success(data.message);
        route.push("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(error);
    }
  };

  return (
    <AuthGuard isPublic={true}>
      <div className="flex flex-col">
        <div className="pt-10 mx-11 w-[293px] h-[100.79px] sm:w-[393px] sm:mx-40 md:w-[393px] md:mx-80 lg:w-[393px] lg:mx-100 xl:w-[393px] xl:mx-110 2xl:w-[393px] 2xl:mx-200 2xl:my-30">
          <h1 className="text-[40px] font-bold text-center">Movie Maker</h1>

          <form className="flex flex-col mt-8 gap-2" onSubmit={handleSubmit}>
            <InputField
              placeholder="First Name"
              name="firstname"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value.trim())}
              required
            />

            <InputField
              placeholder="Last Name"
              name="lastname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value.trim())}
              required
            />

            <InputField
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <FormButton type="submit">Sign Up</FormButton>
          </form>

          <span className="mt-5 ml-5 text-[15px]">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-gray-600">
              Login
            </Link>
          </span>
        </div>
      </div>
    </AuthGuard>
  );
}

export default Signup;
