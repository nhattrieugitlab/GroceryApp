import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../views/CartScreen';
import PaymentNavigator from './PaymentmethodNavigator';
export type CartNavigationParams = {
  CartScreen: undefined;
  PaymentNavigator: undefined;
};
const CartStackNavigatior = createNativeStackNavigator<CartNavigationParams>();
const CartNavigatior = () => {
  return (
    <CartStackNavigatior.Navigator screenOptions={{headerShown: false}}>
      <CartStackNavigatior.Screen name="CartScreen" component={CartScreen} />
      <CartStackNavigatior.Screen
        name="PaymentNavigator"
        component={PaymentNavigator}
      />
    </CartStackNavigatior.Navigator>
  );
};
export default CartNavigatior;
