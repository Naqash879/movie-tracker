import { z } from "zod";

export const LoginScheema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(3, "Password must be at least 3 characters long"),
});
export type LoginDataType = z.infer<typeof LoginScheema>;
