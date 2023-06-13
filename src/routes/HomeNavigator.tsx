import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreScreen from '../views/ExploreScreen';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {AppIcons} from '../constant/IconPath';
import IconBottomTabBar from '../views/components/IconBottomTabBar';
type HomeTabParamList = {
  Shop: undefined;
  Explore: undefined;
  Cart: undefined;
  Favorite: undefined;
  Account: undefined;
};
const HomeBottomTabNavigator = createBottomTabNavigator<HomeTabParamList>();
enum HomeTabNames {
  Shop = 'Shop',
  Explore = 'Explore',
  Cart = 'Cart',
  Favorite = 'Favorite',
  Account = 'Account',
}
type HomeTab = {
  component: React.FC;
  name: keyof HomeTabParamList;
  icon: ImageSourcePropType;
};
const HomeTabs: HomeTab[] = [
  {
    component: ExploreScreen,
    name: HomeTabNames.Shop,
    icon: AppIcons.IconShop,
  },
  {
    component: ExploreScreen,
    name: HomeTabNames.Explore,
    icon: AppIcons.IconExplore,
  },
  {
    component: ExploreScreen,
    name: HomeTabNames.Cart,
    icon: AppIcons.IconCart,
  },
  {
    component: ExploreScreen,
    name: HomeTabNames.Favorite,
    icon: AppIcons.IconFavorie,
  },
  {
    component: ExploreScreen,
    name: HomeTabNames.Account,
    icon: AppIcons.IconAccount,
  },
];
type TabBarIconProps = {
  focused: boolean;
};
const HomeNavigator = () => {
  return (
    <HomeBottomTabNavigator.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FF5E00',
        tabBarInactiveTintColor: '#6D3805',
        tabBarStyle: styles.bottomBar,
        headerShown: false,
      }}>
      {HomeTabs.map(eachTab => {
        return (
          <HomeBottomTabNavigator.Screen
            options={{
              tabBarIcon: ({color}) => {
                return (
                  <IconBottomTabBar
                    label={eachTab.name}
                    icon={eachTab.icon}
                    color={color}
                  />
                );
              },
            }}
            key={eachTab.name}
            name={eachTab.name}
            component={eachTab.component}
          />
        );
      })}
    </HomeBottomTabNavigator.Navigator>
  );
};
const styles = StyleSheet.create({
  bottomBar: {
    paddingBottom: 20,
    borderColor: '#E9E9E9',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    height: 83,
  },
});
export default HomeNavigator;
