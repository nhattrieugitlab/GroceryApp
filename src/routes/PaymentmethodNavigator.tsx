import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectPaymentMethodScreen from '../views/SelectPaymentMethodScreen';
import PaymentScreen from '../views/paymentscreen/PaymentScreen';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
export type PaymentMethodNavigatorParams = {
  SelectPaymentMethodScreen: undefined;
  PaymentScreen: {defaultMethod: 'cashOnDelivery' | string};
};
export type PaymentScreenProps = NativeStackScreenProps<
  PaymentMethodNavigatorParams,
  'SelectPaymentMethodScreen'
>;
const PaymentMethodStackNavigator =
  createNativeStackNavigator<PaymentMethodNavigatorParams>();
const PaymentNavigator = () => {
  return (
    <PaymentMethodStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <PaymentMethodStackNavigator.Screen
        initialParams={{defaultMethod: 'Cash on delivery'}}
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
