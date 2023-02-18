import { CartItem } from "../models/cargo.type";

export type UserSchema = {
  uid: string;
  displayName: string;
  email: string;
  cartList: CartItem[];
  createAt: Date;
  isLoggedIn: boolean;
};

export type UserInformation = Pick<UserSchema, "displayName">;

export const userInformationFallback = {
  displayName: "john doe",
};
