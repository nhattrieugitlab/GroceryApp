import React, {useEffect} from 'react';
import AppNavigator from './src/routes/AppNavigator';
import EnterPasswordScreen from './src/views/EnterPassScreen';
import WelComeScreen from './src/views/WelcomeScreen';
import AuthStackNavigator from './src/routes/AuthNavigator';
import SignUp from './src/views/ComfirmPasswordScreen';
import PaymentScreen from './src/views/PayMentScreen';
import ComfirmPasswordScreen from './src/views/ComfirmPasswordScreen';
import VerifiPassScreen from './src/views/VerifiPassScreen';
import LoginScreen from './src/views/LoginScreen';

function App(): JSX.Element {
  return <LoginScreen />;

}
export default App;
