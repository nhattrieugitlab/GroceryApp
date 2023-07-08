import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import { View } from 'react-native';
import { useEffect, useState } from 'react'
import { LightTheme } from '../constant/Theme';
import AuthStackNavigator from './AuthNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedLottieView from 'lottie-react-native';
import { AppAnimation } from '../constant/IconPath';
const AppStack = createNativeStackNavigator<AppStackParams>();
enum
  AppStackNames {
  Home = 'HomeNavigator',
  Auth = 'AuthNavigator',
}
export type AppStackParams = {
  HomeNavigator: undefined;
  AuthNavigator: undefined;
};
const AppNavigator = () => {
  const [isLogined, setIsLogin] = useState(false)
  const [isCheckLogin, setCheckLogin] = useState(false)
  const checkIsLogined = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken')
    if (accessToken != null) {
      setIsLogin(true)
    }
    setCheckLogin(true)
  }
  useEffect(() => {
    checkIsLogined()
  }, [])

  return <View style={{ flex: 1 }}>
    {
      isCheckLogin && <NavigationContainer theme={LightTheme}>
        <AppStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {
            !isLogined && <AppStack.Screen
              name={AppStackNames.Auth}
              component={AuthStackNavigator}
            />
          }
          <AppStack.Screen
            name={AppStackNames.Home}
            component={HomeNavigator}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    }
    {
      !isCheckLogin && <AnimatedLottieView autoPlay loop source={AppAnimation.Loading} />
    }
  </View>
}
export default AppNavigator;
{/* <View style={{ flex: 1 }}>
  {
    isCheckLogin && <NavigationContainer theme={LightTheme}>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {
          !isLogined && <AppStack.Screen
            name={AppStackNames.Auth}
            component={AuthStackNavigator}
          />
        }
        <AppStack.Screen
          name={AppStackNames.Home}
          component={HomeNavigator}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  }
  {
    !isCheckLogin && <AnimatedLottieView autoPlay loop source={AppAnimation.Loading} />
  }
</View> */}