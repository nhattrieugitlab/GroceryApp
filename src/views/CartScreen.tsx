import React from 'react';
import CartItem from '../components/CartItem';
import TabBar from '../components/Tabbar';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import { Product } from '../datatypes/Product';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CartNavigationParams } from '../routes/CartNavigatior';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useState, useEffect } from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { AppAnimation } from '../constant/IconPath';
import formatVNCurrencyTypeNumber from '../utilities/CurrencyConverter';
import getTotalAmount from '../utilities/GetCartTotalAmount';
const CartScreen = () => {
  const cartNavigation =
    useNavigation<NativeStackNavigationProp<CartNavigationParams>>();
  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return (
      <CartItem
        weight={item.weight}
        _id={item._id}
        count={item.count || 0}
        price={item.price}
        name={item.name}
        photo={item.photo}
      />
    );
  };
  const itemOnCart = useSelector((state: RootState) => state.product.products);
  useEffect(() => {
    setTotalAmount(getTotalAmount(itemOnCart));
    console.log(getTotalAmount(itemOnCart))
  }, [itemOnCart]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const itemOnCardCount = itemOnCart.length;
  return (
    <ScreenContainer>
      <TabBar label="Cart " />
      {itemOnCardCount > 0 ? (
        <>
          <FlatList
            ItemSeparatorComponent={() => (
              <View
                style={{
                  marginVertical: 5,
                  height: 1,
                  backgroundColor: '#6D380517',
                }}
              />
            )}
            extraData={(item: Product) => item._id}
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
