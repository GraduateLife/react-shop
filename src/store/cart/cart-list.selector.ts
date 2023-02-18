import { CartItem } from "../../models/cargo.type";
import { RootState } from "../store";

export const selectCartList = (state: RootState): CartItem[] => state._cartList;

export const selectCartOverallQuantity = (state: RootState): number =>
  state._cartList.reduce((acc, item) => acc + item.ItemQuantity, 0);

export const selectCartOverallPrice = (state: RootState): number =>
  state._cartList.reduce(
    (acc, item) => acc + item.ItemQuantity * item.ProdPrice,
    0
  );
