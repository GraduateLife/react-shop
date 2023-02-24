import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { readCartList } from "../../firebase/cartItems/read-and-write";
import { findUserByEmail } from "../../firebase/user/read-and-write";
import { CartItem } from "../../models/cargo.type";
import { Product } from "../../models/cargo.type";

import { AsyncState } from "../types";

import { addOneItem, reduceOneItem, removeOneItem } from "./cart-list.effect";

const SLICE_NAME = "CART_LIST";
const ASYNC_REDUCER_NAME = `${SLICE_NAME}/FETCH_DATA`;

type CartListState = {
  cartList: CartItem[];
} & AsyncState;

const cartListInitialState: CartListState = {
  cartList: [],
  requestStatus: "idle",
  requestError: null,
};

export const fetchCartList = createAsyncThunk(
  ASYNC_REDUCER_NAME,
  async (targetUserEmail: string) => {
    const foundUser = await findUserByEmail(targetUserEmail);
    const fetched = await readCartList(foundUser.UserId);
    return fetched;
  }
);

const cartListSlice = createSlice({
  name: SLICE_NAME,
  initialState: cartListInitialState,
  reducers: {
    ACTION_PLUS(state, action: PayloadAction<Product | CartItem>) {
      state.cartList = addOneItem(state.cartList, action.payload);
    },
    ACTION_MINUS(state, action: PayloadAction<CartItem>) {
      state.cartList = reduceOneItem(state.cartList, action.payload);
    },
    ACTION_REMOVE(state, action: PayloadAction<CartItem>) {
      state.cartList = removeOneItem(state.cartList, action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCartList.pending, (state, action) => {
        state.requestStatus = "loading";
      })
      .addCase(fetchCartList.fulfilled, (state, action) => {
        state.requestStatus = "succeeded";
        state.cartList = action.payload;
      })
      .addCase(fetchCartList.rejected, (state, action) => {
        state.requestStatus = "failed";
      });
  },
});

export const { ACTION_PLUS, ACTION_MINUS, ACTION_REMOVE } =
  cartListSlice.actions;

export default cartListSlice.reducer;
