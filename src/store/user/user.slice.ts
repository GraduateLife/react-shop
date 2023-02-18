import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { assert } from "console";
import { User as fb_User } from "firebase/auth";
import { UserInformation, UserSchema } from "../../firebase/schema";
import { signUpWithEmail } from "../../firebase/services/authentication";
import { createUserDocFromAuth } from "../../firebase/services/user-creation";

import { UserWebsite } from "../../models/user.types";
import { assertFireBaseError } from "../../utils/error-assertion";
import { AsyncState } from "../types";

const SLICE_NAME = "USER";
const ASYNC_REDUCER_WRITE = `${SLICE_NAME}/WRITE_USER`;

type UserState = {
  user: UserWebsite;
} & AsyncState;

export const writeUser = createAsyncThunk(
  ASYNC_REDUCER_WRITE,
  async (_args: { email: string; password: string }) => {
    const { email, password } = _args;

    try {
      const firebaseResponse = await signUpWithEmail(email, password);

      const dbRes = await createUserDocFromAuth(firebaseResponse);
      return dbRes;
    } catch (e: any) {
      console.log("111", e.code);
    }
  }
);

const userInitialState: UserState = {
  user: {
    UserId: "",
    UserDisplayName: "",
    UserEmail: "",
    UserPassword: "",
    UserCartList: [],
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
      .addCase(writeUser.pending, (state, action) => {
        state.requestStatus = "loading";
      })
      .addCase(writeUser.fulfilled, (state, action) => {
        state.requestStatus = "succeeded";
        console.log(action.payload);
      });
  },
});

export default userSlice.reducer;
