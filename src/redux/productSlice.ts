import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../datatypes/Product';
import {fakeCartData} from '../constant/FakeDate';
import {ToastAndroid} from 'react-native';
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
      const itemFind = state.products.find(
        prod => prod.id === action.payload.id,
      );
      if (!itemFind) {
        state.products.push(action.payload);
      } else {
        ToastAndroid.showWithGravity(
          'Product is already exits in your cart',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
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
