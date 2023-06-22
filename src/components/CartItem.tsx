import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import formatVNCurrencyTypeNumber from '../utilities/CurrencyConverter';

type Props = {
  label: string;
  price: number;
  image: ImageSourcePropType;
};
function CartItem({label, image, price}: Props): JSX.Element {
  const [count, setCount] = useState<number>(2);
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.nameAndNumber}>
        <Text style={styles.title}>{label}</Text>
        <View style={styles.qualityContainer}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text
              onPress={() => setCount(count - 1)}
              style={styles.touchableOpacityLabel}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={styles.touchableOpacityLabel}>{count}</Text>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text
              onPress={() => setCount(count + 1)}
              style={styles.touchableOpacityLabel}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.priceLabel}>{formatVNCurrencyTypeNumber(price)}</Text>
    </View>
  );
}

export default CartItem;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  nameAndNumber: {
    width: 150,
    justifyContent: 'space-between',
  },
  priceLabel: {
    top: 20,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#6D3805',
  },
  touchableOpacityLabel: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#6D3805',
  },
  touchableOpacity: {
    width: 25,
    height: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qualityContainer: {
    marginTop: 20,
    width: 100,
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
    borderRadius: 30,
    padding: 5,
  },
  title: {
    textAlign: 'left',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#6D3805',
  },
  container: {
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
