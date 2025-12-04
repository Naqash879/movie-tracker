"use client";
import { useEffect, useState, PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface AuthGuardProps {
  isPublic?: boolean;
}

const AuthGuard = ({
  children,
  isPublic = false,
}: PropsWithChildren & AuthGuardProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = Cookies.get("user");

    if (user && isPublic) {
      router.push("/");
    } else if (!user && !isPublic) {
      router.push("/login");
    } else {
      setTimeout(() => setIsLoading(false), 0);
    }
  }, [router, isPublic]);

  if (isLoading) return null;

  return <>{children}</>;
};

export default AuthGuard;
