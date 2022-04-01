import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type AppState = {
  loading: boolean;
};

const initialState: AppState = {
  loading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

const { setLoading } = appSlice.actions;

const selectSelf = (state: RootState) => state.app;
const loadingSelector = createSelector(selectSelf, (state: AppState) => state.loading);

export { setLoading, loadingSelector };
export default appSlice.reducer;