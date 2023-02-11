import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../models/cart-item.type";
import { Product } from "../../models/product.type";
import { fetchAllCartItems } from "../../__DUMMY__DATA__/products/cartItems-list";
import { addOneItem, reduceOneItem, removeOneItem } from "./cart-list.effect";

const SLICE_NAME = "cart-list";

//FIXME all items should be async
//? Q so when should I request for cartList?
//? A I think should be once u click on the cart button
const INITIAL_STATE: CartItem[] = fetchAllCartItems();

export const cartListSlice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    ACTION_PLUS: (state, action: PayloadAction<Product | CartItem>) =>
      addOneItem(state, action.payload),

    ACTION_MINUS: (state, action: PayloadAction<CartItem>) =>
      reduceOneItem(state, action.payload),

    ACTION_REMOVE: (state, action: PayloadAction<CartItem>) =>
      removeOneItem(state, action.payload),
  },
});

export const { ACTION_PLUS, ACTION_MINUS, ACTION_REMOVE } =
  cartListSlice.actions;
export default cartListSlice.reducer;
