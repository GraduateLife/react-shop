import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readCategories } from "../../firebase/categories/read-and-write";
import { Category } from "../../models/category.type";

import { AsyncState } from "../types";

const SLICE_NAME = "CATEGORY_LIST";
const ASYNC_REDUCER_NAME = `${SLICE_NAME}/FETCH_DATA`;

type CategoryListState = {
  categoryList: Category[];
} & AsyncState;

const categoryListInitialState: CategoryListState = {
  categoryList: [],
  requestStatus: "idle",
  requestError: null,
};

export const fetchCategoryList = createAsyncThunk(
  ASYNC_REDUCER_NAME,
  async () => {
    const fetched = await readCategories();
    return fetched;
  }
);
const categoryListSlice = createSlice({
  name: SLICE_NAME,
  initialState: categoryListInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategoryList.pending, (state, action) => {
        state.requestStatus = "loading";
      })
      .addCase(fetchCategoryList.fulfilled, (state, action) => {
        state.requestStatus = "succeeded";

        state.categoryList = action.payload;
      });
    //! important! firestore write operation never fails even if you are offline!
  },
});
export default categoryListSlice.reducer;
