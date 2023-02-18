import { RootState } from "../store";

const selectUserReducer = (state: RootState) => state._user.user;

export const selectCategoryData = (state: RootState) => state._user.user;

export const selectCategoryRequestStatus = (state: RootState) =>
  state._user.requestStatus;
export const selectCategoryRequestError = (state: RootState) =>
  state._user.requestError;
