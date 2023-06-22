import React, {useEffect} from 'react';
import AppNavigator from './src/routes/AppNavigator';
import EnterPasswordScreen from './src/views/EnterPassScreen';
import WelComeScreen from './src/views/WelcomeScreen';
import AuthStackNavigator from './src/routes/AuthNavigator';
import SignUp from './src/views/ComfirmPasswordScreen';
import PaymentScreen from './src/views/paymentscreen/PaymentScreen';
import SelectPaymentMethodScreen from './src/views/SelectPaymentMethodScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Test from './src/views/TEST';
import App2 from './src/views/Test2';
function App(): JSX.Element {
  return <SelectPaymentMethodScreen />;
}
export default App;
