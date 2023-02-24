import { nanoid } from "@reduxjs/toolkit";
import { UserWebsite } from "../../models/user.types";

export const prepareMembershipUserDataWithFallback = (
  email: string,
  password: string,
  displayName: string
): UserWebsite => {
  return {
    UserId: nanoid(),
    UserDisplayName: displayName,
    UserEmail: email.toLowerCase(),
    UserPassword: password,
    UserIsLoggedIn: true,
  };
};

export type UserSchema = {
  UserCreatedAt: Date;
} & UserWebsite;
