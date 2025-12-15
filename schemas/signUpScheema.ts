import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type SignUpDataType = z.infer<typeof sighnUpSchema>;
