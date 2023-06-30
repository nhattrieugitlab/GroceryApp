import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CreditCardType} from '../datatypes/CreditCard';
export type defaultPaymentMethodStateType = {
  paymentMethod: CreditCardType | 'Cash on delivery';
};
const initialCreditCardState: defaultPaymentMethodStateType = {
  paymentMethod: {
    cvv: '123',
    name: 'Hoang Van Thanh 1',
    exDate: '20/8',
    number: '625094100652859',
  },
};
export const defaultPaymentMethodSlice = createSlice({
  name: 'creditCard',
  initialState: initialCreditCardState,
  reducers: {
    updateDefaultPaymentMethod: (
      state,
      action: PayloadAction<CreditCardType | 'Cash on delivery'>,
    ) => {
      state.paymentMethod = action.payload;
    },
  },
});
export const {updateDefaultPaymentMethod} = defaultPaymentMethodSlice.actions;
export default defaultPaymentMethodSlice.reducer;
