import {configureStore} from '@reduxjs/toolkit';
import productReducer from './productSlice';
import crediCardReducer from './creditCardSlice';
import defaultPaymentMethodReducer from './defaultPaymentMethodSlice';
import loadingReducer from './isLoadingSlice';
const store = configureStore({
  reducer: {
    product: productReducer,
    crediCard: crediCardReducer,
    defaultPaymentMethod: defaultPaymentMethodReducer,
    loading: loadingReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
