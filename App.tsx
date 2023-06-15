import React, {useEffect} from 'react';
import AppNavigator from './src/routes/AppNavigator';
import EnterPasswordScreen from './src/views/EnterPassScreen';
import WelComeScreen from './src/views/WelcomeScreen';
import AuthStackNavigator from './src/routes/AuthNavigator';
import SignUp from './src/views/ComfirmPasswordScreen';
import PaymentScreen from './src/views/PayMentScreen';
function App(): JSX.Element {
  return <PaymentScreen />;
}
export default App;
