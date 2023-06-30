import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectPaymentMethodScreen from '../views/SelectPaymentMethodScreen';
import PaymentScreen from '../views/paymentscreen/PaymentScreen';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CreditCardType } from '../datatypes/CreditCard';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
export type PaymentMethodNavigatorParams = {
  SelectPaymentMethodScreen: undefined;
  PaymentScreen: { paymentMethod: 'Cash on delivery' | CreditCardType };
};
export type PaymentScreenProps = NativeStackScreenProps<
  PaymentMethodNavigatorParams,
  'PaymentScreen'
>;
const PaymentMethodStackNavigator =
  createNativeStackNavigator<PaymentMethodNavigatorParams>();
const PaymentNavigator = () => {
  const defaulPaymentMethod = useSelector((state: RootState) => state.defaultPaymentMethod.paymentMethod)
  return (
    <PaymentMethodStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <PaymentMethodStackNavigator.Screen
        initialParams={{ paymentMethod: defaulPaymentMethod }}
        component={PaymentScreen}
        name="PaymentScreen"
      />
      <PaymentMethodStackNavigator.Screen
        component={SelectPaymentMethodScreen}
        name="SelectPaymentMethodScreen"
      />
    </PaymentMethodStackNavigator.Navigator>
  );
};
export default PaymentNavigator;
