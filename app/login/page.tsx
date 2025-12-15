"use client";

import Link from "next/link";

import { login } from "@/services/user";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import AuthGuard from "@/components/AuthGuard";
import { useRouter } from "next/navigation";
import { ILoginResponse } from "@/utils/data";
import { LoginScheema, LoginDataType } from "@/schemas/loginSceema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Login() {
  const router = useRouter();
  const form = useForm<LoginDataType>({
    resolver: zodResolver(LoginScheema),
  });

  const onSubmit = async (values: LoginDataType) => {
    const loadingToast = toast.loading("Loading...");

    const data: ILoginResponse = await login(
      values.email.trim(),
      values.password.trim()
    );
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
      <div className="flex justify-center items-center min-h-screen">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center mb-4">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-600">
              If you don not have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-gray-800 hover:underline"
              >
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </AuthGuard>
  );
}
