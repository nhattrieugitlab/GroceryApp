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
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../redux/store';
import {increase, reduce, remove} from '../redux/productSlice';
import {Swipeable} from 'react-native-gesture-handler';
import {AppIcons} from '../constant/IconPath';
type Props = {
  id: number;
  amount: number;
  label: string;
  price: number;
  image: ImageSourcePropType;
};
function CartItem({id, label, image, price, amount}: Props): JSX.Element {
  const product = {id, name: label, image, price, amount};
  const [count, setCount] = useState<number>(amount);
  const dispatch = useDispatch<AppDispatch>();
  const increaseCount = async () => {
    dispatch(increase({...product, amount: count + 1}));
  };
  const reduceCount = async () => {
    dispatch(reduce({...product, amount: count - 1}));
  };
  const renderDeleteMenu = () => (
    <TouchableOpacity
      onPress={async () => {
        dispatch(remove({...product}));
      }}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 71,
        height: '100%',
        backgroundColor: '#A42B32',
      }}>
      <Image
        style={{
          width: 21,
          height: 25,
        }}
        source={AppIcons.IconTrash}
      />
    </TouchableOpacity>
  );
  return (
    <Swipeable renderRightActions={renderDeleteMenu}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.nameAndNumber}>
          <Text style={styles.title}>{label}</Text>
          <View style={styles.qualityContainer}>
            <TouchableOpacity
              onPress={() => {
                if (count > 1) {
                  setCount(prevCount => {
                    return prevCount - 1;
                  });
                  reduceCount();
                }
              }}
              style={styles.touchableOpacity}>
              <Text style={styles.touchableOpacityLabel}>-</Text>
            </TouchableOpacity>
            <Text style={styles.touchableOpacityLabel}>{count}</Text>
            <TouchableOpacity
              onPress={async () => {
                setCount(prevCount => {
                  return prevCount + 1;
                });
                increaseCount();
              }}
              style={styles.touchableOpacity}>
              <Text style={styles.touchableOpacityLabel}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.priceLabel}>
          {formatVNCurrencyTypeNumber(price * count)}
        </Text>
      </View>
    </Swipeable>
  );
}

export default CartItem;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    resizeMode: 'stretch',
  },
  nameAndNumber: {
    width: 150,
    justifyContent: 'space-between',
  },
  priceLabel: {
    top: 20,
    width: '30%',
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
