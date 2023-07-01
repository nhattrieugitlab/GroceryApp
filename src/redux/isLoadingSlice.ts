import {createSlice, PayloadAction} from '@reduxjs/toolkit';
type isShowLoadingStateType = {
  isShowLoading: boolean;
};
export const loadingSlice = createSlice({
  name: 'isLoading',
  initialState: {isShowLoading: false},
  reducers: {
    setShowLoading: (state, action: PayloadAction<isShowLoadingStateType>) => {
      state.isShowLoading = action.payload.isShowLoading;
    },
  },
});
export const {setShowLoading} = loadingSlice.actions;
export default loadingSlice.reducer;
