import React from 'react';
import CartItem from '../components/CartItem';
import TabBar from '../components/Tabbar';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import {Product} from '../datatypes/Product';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CartNavigationParams} from '../routes/CartNavigatior';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {useState, useEffect} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {AppAnimation} from '../constant/IconPath';
import formatVNCurrencyTypeNumber from '../utilities/CurrencyConverter';
const CartScreen = () => {
  const cartNavigation =
    useNavigation<NativeStackNavigationProp<CartNavigationParams>>();
  const renderItem: ListRenderItem<Product> = ({item}) => {
    return (
      <CartItem
        amount={item.amount || 0}
        price={item.price}
        label={item.name}
        image={item.image}
      />
    );
  };
  const itemOnCart = useSelector((state: RootState) => state.product.products);

  const getTotalAmount = () => {
    return itemOnCart.reduce((accumulator, product) => {
      let total = 0;
      console.log(product.amount);
      product.amount
        ? (total = accumulator + product.price * product.amount)
        : accumulator + total;
      return total;
    }, 0);
  };
  useEffect(() => {
    setTotalAmount(getTotalAmount());
  }, [itemOnCart]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const itemOnCardCount = itemOnCart.length;
  return (
    <ScreenContainer>
      <TabBar label="Cart " />
      {itemOnCardCount > 0 ? (
        <>
          <FlatList
            extraData={(item: Product) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            data={itemOnCart}
          />
          <Text style={styles.totalAmountText}>
            Total : {formatVNCurrencyTypeNumber(totalAmount)}
          </Text>
          <Button
            onPress={() => {
              cartNavigation.navigate('PaymentNavigator');
            }}
            label="Checkout"
          />
        </>
      ) : (
        <>
          <AnimatedLottieView autoPlay loop source={AppAnimation.EmptyCart} />
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        </>
      )}
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  totalAmountText: {
    marginVertical: 20,
    borderRadius: 8,
    textAlign: 'right',
    paddingHorizontal: 20,
    lineHeight: 40,
    color: '#FF5E00',
    fontSize: 18,
    fontWeight: '700',
  },
  emptyCartText: {
    textAlign: 'center',
    color: '#6D3805',
    fontSize: 18,
    fontWeight: '400',
  },
});
export default CartScreen;
