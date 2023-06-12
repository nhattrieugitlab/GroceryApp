import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import {View} from 'react-native';
import {LightTheme} from '../constant/Theme';
const AppStack = createNativeStackNavigator();
enum AppStackNames {
  Home = 'HomeScreen',
}

const AppNavigator = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <NavigationContainer theme={LightTheme}>
        <AppStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <AppStack.Screen
            name={AppStackNames.Home}
            component={HomeNavigator}></AppStack.Screen>
        </AppStack.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default AppNavigator;
