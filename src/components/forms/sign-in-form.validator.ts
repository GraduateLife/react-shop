import { z } from "zod";
export const SignInValidator = z.object({
  nickname: z.string(),
  email: z.string().email({ message: "This is not a valid email address" }),
  password: z.string().regex(
    //eslint-disable-next-line no-useless-escape
    /(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d)(?=.*[!"£$%^&*())_+\-={}\[\];:@'<>?,./#~\\\|`].*)(?=.{8,16})/,
    {
      message: "Your password format is incorrect",
    }
  ),
});

/*
 * the password should be:
 * contain 1+ upper case letter
 * contain 1+ lower case letter
 * contain 1+ special letter
 * between 8-16 characters
 */

export type SignInInformation = z.infer<typeof SignInValidator>;
