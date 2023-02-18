import { configureStore } from "@reduxjs/toolkit";

import cartListReducer from "./cart/cart-list.slice";
import categoryListReducer from "./category/category.slice";
import userReducer from "./user/user.slice";
export const store = configureStore({
  reducer: {
    _cartList: cartListReducer,
    _categoryList: categoryListReducer,
    _user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
