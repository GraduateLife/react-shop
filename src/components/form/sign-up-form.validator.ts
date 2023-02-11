import { z } from "zod";

export const SignUpValidator = z
  .object({
    email: z.string().email({ message: "Your email address is not valid" }),
    password: z.string().min(8, {
      message: "Your password should be at least 8 characters long",
    }),
    confirmPassword: z.string(),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Your passwords don't match",
    path: ["confirmPassword"],
  });

export type SignUpInformation = z.infer<typeof SignUpValidator>;
