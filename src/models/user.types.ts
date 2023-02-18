import { CartItem } from "./cargo.type";

export type UserWebsite = {
  UserId: string;
  UserDisplayName: string;
  UserEmail: string;
  UserPassword: string;
  UserCartList: CartItem[];
  UserIsLoggedIn: boolean;
};
