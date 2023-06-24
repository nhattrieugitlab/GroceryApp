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
    increase: (state, action: PayloadAction<Product>) => {
      const newCart = state.products.map(item => {
        if (item.id == action.payload.id) {
          item.amount = action.payload.amount;
        }
        return item;
      });
      state.products = newCart;
    },
    reduce: (state, action: PayloadAction<Product>) => {
      const newCart = state.products.map(item => {
        if (item.id == action.payload.id) {
          item.amount = action.payload.amount;
        }
        return item;
      });
      state.products = newCart;
    },
    remove: (state, action: PayloadAction<Product>) => {
      const newCart = state.products.filter(item => {
        return item.id !== action.payload.id;
      });
      state.products = newCart;
    },
    emptyCart: state => {
      state.products = [];
    },
  },
});
export const {add, increase, remove, reduce, emptyCart} = productSlice.actions;
export default productSlice.reducer;
