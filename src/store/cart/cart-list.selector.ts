import { RootState } from "../store";

export const selectCartListReducer = (state: RootState) => state._cartList;

export const selectCartListData = (state: RootState) =>
  state._cartList.cartList ?? [];

export const selectCartOverallQuantity = (state: RootState) => {
  if (state._cartList.cartList)
    return state._cartList.cartList.reduce(
      (acc, item) => acc + item.ItemQuantity,
      0
    );
  else return 0;
};

export const selectCartOverallPrice = (state: RootState) => {
  if (state._cartList.cartList) {
    return state._cartList.cartList.reduce(
      (acc, item) => acc + item.ItemQuantity * item.ProdPrice,
      0
    );
  } else return 0;
};

export const selectCartRequestStatus = (state: RootState) =>
  state._cartList.requestStatus;
export const selectCartRequestError = (state: RootState) =>
  state._cartList.requestError;
