import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelComeScreen from '../views/WelcomeScreen';
enum AuthStackNames {
  Welcome = 'WelcomeScreen',
}
type AuthStackParamList = {
  WelcomeScreen: undefined;
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
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
