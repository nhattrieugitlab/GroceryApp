import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelComeScreen from '../views/WelcomeScreen';
import LoginScreen from '../views/LoginScreen';
import EnterPasswordScreen from '../views/EnterPassScreen';
import EnterPhoneNumberScreen from '../views/EnterPhoneNumerScreen';
import VerifyPassScreen from '../views/VerifyCodeScreen';
import VerifyCodeScreen from '../views/VerifyCodeScreen';
enum AuthStackNames {
  Welcome = 'WelcomeScreen',
  EnterPhoneNubmer = 'EnterPhoneNumberScreen',
  EnterPasss = 'EnterPassWordScreen',
  SignIn = 'SignInScreen',
  VerifyCode = 'VerifyCodeScreen',
}
export type AuthStackParamList = {
  VerifyCodeScreen: undefined;
  WelcomeScreen: undefined;
  EnterPhoneNumberScreen: undefined;
  EnterPassWordScreen: undefined;
  SignInScreen: undefined;
};
const AuthStack = createNativeStackNavigator();
const AuthNavigator = (): React.JSX.Element => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen
        name={AuthStackNames.Welcome}
        component={WelComeScreen}
      />
      <AuthStack.Screen
        name={AuthStackNames.EnterPasss}
        component={EnterPasswordScreen}
      />
      <AuthStack.Screen
        name={AuthStackNames.EnterPhoneNubmer}
        component={EnterPhoneNumberScreen}
      />
      <AuthStack.Screen
        name={AuthStackNames.VerifyCode}
        component={VerifyCodeScreen}
      />
      <AuthStack.Screen name={AuthStackNames.SignIn} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
