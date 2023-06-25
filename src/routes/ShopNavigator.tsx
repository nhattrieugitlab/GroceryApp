import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from '../views/ShopScreen';
import FoodInformationScreen from '../views/FoodInformationScreen';
import { Product } from '../datatypes/Product';
enum ShopStackNames {
    Shop = 'ShopScreen',
    DetailProduct = 'DetailProductScreen',
}
export type ShopStackParamList = {
    ShopScreen: undefined;
    DetailProductScreen: Product;
};
const ShopStack = createNativeStackNavigator();
const ShopNavigator = (): React.JSX.Element => {
    return (
        <ShopStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <ShopStack.Screen
                name={ShopStackNames.Shop}
                component={ShopScreen}
            />
            <ShopStack.Screen
                name={ShopStackNames.DetailProduct}
                component={FoodInformationScreen}
            />
        </ShopStack.Navigator>
    );
};
export type DetailProductScreenProps = NativeStackScreenProps<
    ShopStackParamList,
    'DetailProductScreen'
>
export default ShopNavigator;
