import { RootState } from "../store";

export const selectCategoryListReducer = (state: RootState) =>
  state._categoryList;

export const selectCategoryData = (state: RootState) =>
  state._categoryList.categoryList;

export const selectCategoryRequestStatus = (state: RootState) =>
  state._categoryList.requestStatus;
export const selectCategoryRequestError = (state: RootState) =>
  state._categoryList.requestError;
