import React from 'react';
import AppNavigator from './src/routes/AppNavigator';
import EnterPasswordScreen from './src/views/EnterPassScreen';
import WelComeScreen from './src/views/WelcomeScreen';
import AuthStackNavigator from './src/routes/AuthNavigator';
function App(): JSX.Element {
  //cmt cua thanh
  return <AppNavigator />;
}
export default App;
