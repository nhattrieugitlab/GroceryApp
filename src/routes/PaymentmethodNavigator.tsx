import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectPaymentMethodScreen from '../views/SelectPaymentMethodScreen';

export type PaymentMethodNavigatorParams = {
  SelectPaymentMethodScreen: undefined;
};
const PaymentMethodStackNavigator =
  createNativeStackNavigator<PaymentMethodNavigatorParams>();
const PayMentNavigator = () => {
  return (
    <PaymentMethodStackNavigator.Navigator>
      <PaymentMethodStackNavigator.Screen
        component={SelectPaymentMethodScreen}
        name="SelectPaymentMethodScreen"
      />
    </PaymentMethodStackNavigator.Navigator>
  );
};
export default PayMentNavigator;
