import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelComeScreen from '../views/WelcomeScreen';
import LoginScreen from '../views/LoginScreen';
import EnterPasswordScreen from '../views/EnterPassScreen';
import EnterPhoneNumberScreen from '../views/EnterPhoneNumerScreen';
import VerifyCodeScreen from '../views/VerifyCodeScreen';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

enum AuthStackNames {
  Welcome = 'WelcomeScreen',
  EnterPhoneNubmer = 'EnterPhoneNumberScreen',
  EnterPasss = 'EnterPassWordScreen',
  SignIn = 'SignInScreen',
  VerifyCode = 'VerifyCodeScreen',
}
export type AuthStackParamList = {
  VerifyCodeScreen: { userName: string, phoneNumber: string, password: string };
  WelcomeScreen: undefined;
  EnterPhoneNumberScreen: undefined;
  EnterPassWordScreen: { userName: string, phoneNumber: string };
  SignInScreen: undefined;
};
export type EnterPasswordScreenProps = NativeStackScreenProps<AuthStackParamList, 'EnterPassWordScreen'>
export type VerifyCodeScreenProps = NativeStackScreenProps<AuthStackParamList, 'VerifyCodeScreen'>

const AuthStack = createNativeStackNavigator();
const AuthNavigator = (): React.JSX.Element => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={AuthStackNames.SignIn} component={LoginScreen} />
      {/* 
        <AuthStack.Screen
          name={AuthStackNames.Welcome}
          component={WelComeScreen}
        /> */}
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
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
