import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreScreen from '../views/ExploreScreen';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {AppIcons} from '../constant/IconPath';
type HomeTabParamList = {
  ShopScreen: undefined;
  ExploreScreen: undefined;
  CartScreen: undefined;
  FavoriteScreen: undefined;
  AccountScreen: undefined;
};
const HomeBottomTabNavigator = createBottomTabNavigator<HomeTabParamList>();
enum HomeTabNames {
  Shop = 'ShopScreen',
  Explore = 'ExploreScreen',
  Cart = 'CartScreen',
  Favorite = 'FavoriteScreen',
  Account = 'AccountScreen',
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
        tabBarActiveTintColor: '#FF5E00',
        tabBarInactiveTintColor: '#6D3805',
        tabBarLabelStyle: styles.label,
        tabBarStyle: styles.bottomBar,
        headerShown: false,
      }}>
      {HomeTabs.map(eachTab => {
        return (
          <HomeBottomTabNavigator.Screen
            options={{
              tabBarIcon: ({color, focused}) => {
                return (
                  <Image
                    style={[styles.iconTab, {tintColor: color}]}
                    source={eachTab.icon}
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
  iconTab: {
    width: 18,
    height: 18,
  },
  label: {
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: -0.17,
  },
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
