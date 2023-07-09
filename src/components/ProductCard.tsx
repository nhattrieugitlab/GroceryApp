import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  ToastAndroid
} from 'react-native';
import React, { useMemo, memo, useCallback } from 'react';
import formatVNCurrencyTypeNumber from '../utilities/CurrencyConverter';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { add } from '../redux/productSlice';
import { useNavigation } from '@react-navigation/native';
import { ShopStackParamList } from '../routes/ShopNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type CardProps = {
  _id: string;
  photo: string;
  name: string;
  weight: number;
  price: number;
};

function ProductCard({ photo, name, weight, price, _id }: CardProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const addProduct = useCallback(async () => {
    dispatch(add({ count: 1, _id, photo, name, weight, price }));
  }, [])
  const onProductPress = () => {
    navigation.navigate('DetailProductScreen', { count: 1, name, weight, price, _id, photo })
  }
  const navigation = useNavigation<NativeStackNavigationProp<ShopStackParamList>>()
  return (
    <TouchableOpacity onPress={onProductPress} style={styles.container}>
      <View style={styles.boxImage}>
        <Image source={{ uri: photo }} resizeMode="contain" style={styles.image} />
      </View>
      <View style={styles.boxInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.weight}>{weight}kg,priceg</Text>
        <Text style={styles.price}>{formatVNCurrencyTypeNumber(price)}</Text>
      </View>
      <TouchableOpacity onPress={addProduct} style={styles.addButton}>
        <View style={styles.boxImageAdd}>
          <View
            style={[{ width: '100%', height: 2.15, top: 5.12 }, styles.line]}
          />
          <View
            style={[{ width: 2.15, height: '100%', left: 5.12 }, styles.line]}
          />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 189,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    borderRadius: 20,
    padding: 12,
  },
  boxImage: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 4,
  },
  image: {
    width: '80%',
    height: 169 * 0.5,
  },
  boxInfo: {
    marginTop: 12,
  },
  name: {
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18.31,
    color: '#6D3805',
  },
  weight: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.32,
    color: '#929292',
    marginTop: 1,
  },
  price: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#FF5E00',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#3AA14C',
    width: 29.56,
    height: 29.56,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 12,
    marginBottom: 12,
  },
  boxImageAdd: {
    width: 11.82,
    height: 11.82,
  },
  line: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    borderRadius: 20,
  },
});
export default memo(ProductCard);
