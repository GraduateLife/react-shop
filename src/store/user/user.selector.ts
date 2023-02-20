import { RootState } from "../store";

const selectUserReducer = (state: RootState) => state._user.user;

export const selectUserData = (state: RootState) => state._user.user;
export const selectUserLogin = (state: RootState) =>
  state._user.user.UserIsLoggedIn;
export const selectUserEmail = (state: RootState) => state._user.user.UserEmail;
export const selectUserDisplayName = (state: RootState) =>
  state._user.user.UserDisplayName;
export const selectUserId = (state: RootState) => state._user.user.UserId;
export const selectUserPassword = (state: RootState) =>
  state._user.user.UserPassword;

export const selectUserRequestStatus = (state: RootState) =>
  state._user.requestStatus;
export const selectUserRequestError = (state: RootState) =>
  state._user.requestError;
