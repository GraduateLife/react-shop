import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { writeCartList } from "../../firebase/cartItems/read-and-write";
import { PROVIDERS } from "../../firebase/user/providers";
import {
  findUserByEmail,
  findUserById,
  findUserFromProvider,
} from "../../firebase/user/read-and-write";
import {
  startSignInWithProvider,
  startSignOut,
  startSignUpWithEmail,
} from "../../firebase/user/user-operations";

import { UserWebsite } from "../../models/user.types";
import { assertFireBaseError } from "../../utils/error-assertion";
import { AsyncState } from "../types";

const SLICE_NAME = "USER";

const ASYNC_REDUCER_EMAIL_SIGN_UP = `${SLICE_NAME}/EMAIL_SIGN_UP`;
const ASYNC_REDUCER_EMAIL_SIGN_IN = `${SLICE_NAME}/EMAIL_SIGN_IN`;
const ASYNC_REDUCER_PROVIDER_SIGN_IN = `${SLICE_NAME}/PROVIDER_SIGN_IN`;
const ASYNC_REDUCER_SIGN_OUT = `${SLICE_NAME}/SIGN_OUT`;

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
    try {
      return await findUserByEmail(email);
    } catch (e: any) {
      return {
        ...userDataDefaultState,
      };
    }
  }
);

export const signInByProvider = createAsyncThunk(
  ASYNC_REDUCER_PROVIDER_SIGN_IN,
  async (providerName: PROVIDERS) => {
    await startSignInWithProvider(providerName);
    return findUserFromProvider();
  }
);

export const signOut = createAsyncThunk(ASYNC_REDUCER_SIGN_OUT, async () => {
  await startSignOut();
  return userDataDefaultState;
});

const userDataDefaultState: UserWebsite = {
  UserId: "",
  UserDisplayName: "",
  UserEmail: "",
  UserPassword: "",
  UserIsLoggedIn: false,
};

const userInitialState: UserState = {
  user: userDataDefaultState,
  requestStatus: "idle",
  requestError: null,
};

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState: userInitialState,
  reducers: {
    ACTION_RESET_RQ(state, action) {
      state.requestStatus = "idle";
    },
  },
  extraReducers(builder) {
    builder
      //LINK - email sign up bit start
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
      //LINK - email sign in bit start
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
      })
      //LINK - provider sign in bit start
      .addCase(signInByProvider.pending, (state, action) => {
        state.requestStatus = "loading";
      })
      .addCase(signInByProvider.fulfilled, (state, action) => {
        state.requestStatus = "succeeded";
        state.user = action.payload;
      })
      .addCase(signInByProvider.rejected, (state, action) => {
        state.requestStatus = "failed";
        if (assertFireBaseError(action.error)) {
          state.requestError = action.error;
        } else throw action.error;
      })
      //LINK - sign out bit start
      .addCase(signOut.pending, (state, action) => {
        state.requestStatus = "loading";
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.requestStatus = "succeeded";
        state.user = action.payload;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.requestStatus = "failed";
        if (assertFireBaseError(action.error)) {
          state.requestError = action.error;
        } else throw action.error;
      });
  },
});
export const { ACTION_RESET_RQ } = userSlice.actions;
export default userSlice.reducer;
