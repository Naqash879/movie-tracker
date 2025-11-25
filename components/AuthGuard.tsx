"use client";
import { useEffect, useState, ReactNode, FC } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface AuthGuardProps {
  children: ReactNode;
  isPublic?: boolean;
}

const AuthGuard: FC<AuthGuardProps> = ({ children, isPublic = false }) => {
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

  return <>{children}</>; // proper JSX
};

export default AuthGuard;
