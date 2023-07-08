import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ProductCategory} from '../datatypes/ProductCategory';
import AxiosInstance from '../utilities/AxiosInstance';
export const fetchProductCategory = createAsyncThunk(
  'productCategory/fetchProductCategory',
  async (_, thunkAPI) => {
    console.log('dang lay category');
    const productCategories = await AxiosInstance().get<ProductCategory[]>(
      'product/getCategory',
    );
    return productCategories.data;
  },
);
type productCategoryStateType = {
  productCategories: ProductCategory[];
};
const initialState: productCategoryStateType = {
  productCategories: [],
};
const productCategorySlice = createSlice({
  name: 'productCategory',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    return builder
      .addCase(fetchProductCategory.fulfilled, (state, action) => {
        state.productCategories = action.payload;
        console.log('lay thanh cong');
      })
      .addCase(fetchProductCategory.pending, (state, action) => {
        console.log('dang lay.....');
      })
      .addCase(fetchProductCategory.rejected, (state, action) => {
        console.log('dang loi me r');
      });
  },
});
export const {actions} = productCategorySlice;
export default productCategorySlice.reducer;
