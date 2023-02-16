import { z } from "zod";

export const SignUpValidator = z
  .object({
    nickname: z.string(),
    email: z.string().email({ message: "Your email address is not valid" }),
    password: z
      .string()
      .regex(/.*[A-Z].*/, "You need at least one uppercase character")
      .regex(/.*[a-z].*/, "You need at least one lowercase character")
      .regex(/.*[0-9].*/, "You need at least one number")
      .regex(
        // eslint-disable-next-line
        /.*[!"£$%^&*())_+\-={}\[\];:@'<>?,./#~\\\|`].*/,
        "You need at least one special character"
      )
      .min(8, "Your password is too short")
      .max(16, "Your password is too long"),
    confirmPassword: z.string(),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Your passwords don't match",
    path: ["confirmPassword"],
  });

export type SignUpInformation = z.infer<typeof SignUpValidator>;
