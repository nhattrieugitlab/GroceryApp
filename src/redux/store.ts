import {configureStore} from '@reduxjs/toolkit';
import productReducer from './productSlice';
import crediCardReducer from './creditCardSlice';
import defaultPaymentMethodReducer from './defaultPaymentMethodSlice';
import loadingReducer from './isLoadingSlice';
import productCategoryReducer from './productCategorySlice';
const store = configureStore({
  reducer: {
    product: productReducer,
    crediCard: crediCardReducer,
    defaultPaymentMethod: defaultPaymentMethodReducer,
    loading: loadingReducer,
    productCategory: productCategoryReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
