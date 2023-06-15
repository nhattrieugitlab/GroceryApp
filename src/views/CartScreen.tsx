import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CartItem from '../components/CartItem';
import {ScreenContainer} from 'react-native-screens';

const CartScreen = () => {
  return (
    <ScreenContainer>
      <View style={{paddingHorizontal: 16, paddingTop: 16}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 24,
            lineHeight: 28.8,
            color: '#FF5E00',
            marginLeft: 8.62,
            marginTop: 16,
            textAlign: 'center',
          }}>
          Cart
        </Text>
        <View>
          <CartItem
            price={'$5,99 kg'}
            label={'Red Apple'}
            image={require('../assets/images/apple.png')}
          />
          <CartItem
            price={'$5,99 kg'}
            label={'Orginal Banana'}
            image={require('../assets/images/Banana.png')}
          />
          <CartItem
            price={'$5,99 kg'}
            label={'Avocado Bowl'}
            image={require('../assets/images/avocado.png')}
          />
          <CartItem
            price={'$5,99 kg'}
            label={'Salmon'}
            image={require('../assets/images/salmon.png')}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default CartScreen;
