import { User } from "../../models/user.types";

export const testAccount: User = {
  UserEmail: "test@test.com",
  UserPassword: "123456789",
};

export const isCorrectUser = (u: User): boolean => {
  return (
    u.UserEmail === testAccount.UserEmail &&
    u.UserPassword === testAccount.UserPassword
  );
};

export const checkUserValidity = (
  u: User,
  confirmedPassword: string
): boolean => {
  return (
    isValidEmail(u.UserEmail) &&
    isValidPassword(u.UserPassword) &&
    u.UserPassword === confirmedPassword
  );
};

const isValidEmail = (email: string): boolean => /@/.test(email);
const isValidPassword = (password: string): boolean => password.length >= 8;
