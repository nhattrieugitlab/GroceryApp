import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import {View} from 'react-native';
import {LightTheme} from '../constant/Theme';
import AuthStackNavigator from './AuthNavigator';
const AppStack = createNativeStackNavigator<AppStackParams>();
enum AppStackNames {
  Home = 'HomeNavigator',
  Auth = 'AuthNavigator',
}
export type AppStackParams = {
  HomeNavigator: undefined;
  AuthNavigator: undefined;
};
const AppNavigator = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <NavigationContainer theme={LightTheme}>
        <AppStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <AppStack.Screen
            name={AppStackNames.Auth}
            component={AuthStackNavigator}
          />
          <AppStack.Screen
            name={AppStackNames.Home}
            component={HomeNavigator}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default AppNavigator;
