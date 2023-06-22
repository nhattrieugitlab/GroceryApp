import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelComeScreen from '../views/WelcomeScreen';
import LoginScreen from '../views/LoginScreen';
enum AuthStackNames {
  Welcome = 'WelcomeScreen',
  SignIn = 'SignInScreen',
}
export type AuthStackParamList = {
  WelcomeScreen: undefined;
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
      <AuthStack.Screen name={AuthStackNames.SignIn} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
