import { User } from "../../models/user.types";

export const testAccount: User = {
  UserEmail: "test@test.com",
  UserPassword: "123456789",
};

export const isCorrectUser = (u: any): boolean => {
  return (
    u.email === testAccount.UserEmail && u.password === testAccount.UserPassword
  );
};
