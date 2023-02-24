import { RootState } from "../store";

export const selectUserReducer = (state: RootState) => state._user;

export const selectUserData = (state: RootState) => state._user.user;
// export const selectUserData = createSelector(
//   [selectUserReducer],
//   (state) => state.user
// );

export const selectUserRequestStatus = (state: RootState) =>
  state._user.requestStatus;
export const selectUserRequestError = (state: RootState) =>
  state._user.requestError;
