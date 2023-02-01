import { createSlice } from '@reduxjs/toolkit';
import { HomeState } from '../../../store/types/HomeState';

const initialState = {
  isFetchingProductData: false,
  ProductData: [],
  listData: [],
} as HomeState;

const HomeSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    fetchingProductDataStarted(state) {
      state.isFetchingProductData = true;
    },
    fetchingProductDataSuccess(state, { payload, collectionList }) {
      state.isFetchingProductData = false;
      state.ProductData = payload;
      state.listData = collectionList;
    },
    fetchingProductDataFail(state) {
      state.isFetchingProductData = false;
    },
  },
});

const { actions, reducer } = HomeSlice;

export const {
  fetchingProductDataStarted,
  fetchingProductDataSuccess,
  fetchingProductDataFail,
} = actions;
export default reducer;
