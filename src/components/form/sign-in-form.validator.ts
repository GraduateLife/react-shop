import { z } from "zod";

export const SignInValidator = z.object({
  email: z.string().email({ message: "This is not a valid email address" }),
  password: z.string().min(8, {
    message: "Your password should be at least 8 characters long",
  }),
});

export type SignInInformation = z.infer<typeof SignInValidator>;
