import { CartItem } from "../../models/cart-item.type";
import { RootState } from "../store";

export const selectCartList = (state: RootState): CartItem[] => state.cartList;

export const selectCartOverallQuantity = (state: RootState): number =>
  state.cartList.reduce((acc, item) => acc + item.ItemQuantity, 0);

export const selectCartOverallPrice = (state: RootState): number =>
  state.cartList.reduce(
    (acc, item) => acc + item.ItemQuantity * item.ProdPrice,
    0
  );
