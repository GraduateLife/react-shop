import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { writeCartList } from "../../firebase/cartItems/read-and-write";
import {
  findUserByEmail,
  findUserById,
} from "../../firebase/user/read-and-write";
import { startSignUpWithEmail } from "../../firebase/user/sign-in-or-sign-up";

import { UserWebsite } from "../../models/user.types";
import { assertFireBaseError } from "../../utils/error-assertion";
import { AsyncState } from "../types";

const SLICE_NAME = "USER";

const ASYNC_REDUCER_EMAIL_SIGN_UP = `${SLICE_NAME}/EMAIL_SIGN_UP`;
const ASYNC_REDUCER_EMAIL_SIGN_IN = `${SLICE_NAME}/EMAIL_SIGN_IN`;

type UserState = {
  user: UserWebsite;
} & AsyncState;

export const signUpByEmail = createAsyncThunk(
  ASYNC_REDUCER_EMAIL_SIGN_UP,
  async (preparedUser: UserWebsite) => {
    await startSignUpWithEmail(preparedUser);
    return preparedUser;
  }
);
export const signInByEmail = createAsyncThunk(
  ASYNC_REDUCER_EMAIL_SIGN_IN,
  async (email: string) => {
    return await findUserByEmail(email);
  }
);

const userInitialState: UserState = {
  user: {
    UserId: "",
    UserDisplayName: "",
    UserEmail: "",
    UserPassword: "",
    UserIsLoggedIn: false,
  },
  requestStatus: "idle",
  requestError: null,
};

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState: userInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signUpByEmail.pending, (state, action) => {
        state.requestStatus = "loading";
      })
      .addCase(signUpByEmail.fulfilled, (state, action) => {
        state.requestStatus = "succeeded";
        state.user = action.payload;
      })
      .addCase(signUpByEmail.rejected, (state, action) => {
        state.requestStatus = "failed";
        if (assertFireBaseError(action.error)) {
          state.requestError = action.error;
        } else throw action.error;
      })
      .addCase(signInByEmail.pending, (state, action) => {
        state.requestStatus = "loading";
      })
      .addCase(signInByEmail.fulfilled, (state, action) => {
        state.requestStatus = "succeeded";
        state.user = action.payload;
      })
      .addCase(signInByEmail.rejected, (state, action) => {
        state.requestStatus = "failed";
        if (assertFireBaseError(action.error)) {
          state.requestError = action.error;
        } else throw action.error;
      });
  },
});

export default userSlice.reducer;
