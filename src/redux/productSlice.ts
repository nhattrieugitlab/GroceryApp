import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../datatypes/Product';
import {fakeCartData} from '../constant/FakeDate';
export type ProductsStateType = {
  products: Product[];
};
const initialProductState: ProductsStateType = {
  products: fakeCartData,
};

export const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
});
export const {add} = productSlice.actions;
export default productSlice.reducer;
