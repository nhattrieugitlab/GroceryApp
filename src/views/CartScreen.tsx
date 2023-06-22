import React from 'react';
import CartItem from '../components/CartItem';
import TabBar from '../components/Tabbar';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import {FlatList, ImageSourcePropType, ListRenderItem} from 'react-native';
import {Product} from '../datatypes/Product';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CartNavigationParams} from '../routes/CartNavigatior';

const fakeData: Product[] = [
  {
    name: 'Red Apple',
    image: require('../assets/images/apple.png'),
    price: 323000,
  },
  {
    name: 'Orginal Banana',
    image: require('../assets/images/Banana.png'),
    price: 343000,
  },
  {
    name: 'Avocado Bowl',
    image: require('../assets/images/avocado.png'),
    price: 53000,
  },
  {
    name: 'Red Apple',
    image: require('../assets/images/apple.png'),
    price: 323000,
  },
  {
    name: 'Orginal Banana',
    image: require('../assets/images/Banana.png'),
    price: 343000,
  },
  {
    name: 'Avocado Bowl',
    image: require('../assets/images/avocado.png'),
    price: 53000,
  },
  {
    name: 'Red Apple',
    image: require('../assets/images/apple.png'),
    price: 323000,
  },
  {
    name: 'Orginal Banana',
    image: require('../assets/images/Banana.png'),
    price: 343000,
  },
  {
    name: 'Avocado Bowl',
    image: require('../assets/images/avocado.png'),
    price: 53000,
  },
];
const CartScreen = () => {
  const cartNavigation =
    useNavigation<NativeStackNavigationProp<CartNavigationParams>>();
  const renderItem: ListRenderItem<Product> = ({item}) => {
    return <CartItem price={item.price} label={item.name} image={item.image} />;
  };
  return (
    <ScreenContainer>
      <TabBar label="Cart " />
      <FlatList
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        data={fakeData}
      />
      <Button
        onPress={() => {
          cartNavigation.navigate('PaymentNavigator');
        }}
        label="Checkout"
      />
    </ScreenContainer>
  );
};

export default CartScreen;
