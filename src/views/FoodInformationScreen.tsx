import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList, ToastAndroid, ListRenderItem, ImageSourcePropType, } from 'react-native'
import React, { useState } from 'react'
import ScreenContainer from '../components/ScreenContainer'
import Button from '../components/Button';
import { Product } from '../datatypes/Product';
import ProductCard from '../components/ProductCard';
import { useRoute } from '@react-navigation/native';
import { DetailProductScreenProps } from '../routes/ShopNavigator';
import formatVNCurrencyTypeNumber from '../utilities/CurrencyConverter';
import { productData } from '../constant/FakeDate';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { increase, reduce, add } from '../redux/productSlice';
import TabBar from '../components/Tabbar';
const renderProductItem: ListRenderItem<Product> = ({ item }) => {
  return (
    <View style={{ margin: 5, width: 170, marginBottom: 16 }}>
      <ProductCard
        id={item.id}
        image={item.image}
        name={item.name}
        weight={item.weight}
        price={item.price}
      />
    </View>
  );
};
function FoodInformationScreen(): JSX.Element {
  const product = useRoute<DetailProductScreenProps['route']>().params
  const [count, setCount] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const itemsOnCart = useSelector((state: RootState) => state.product.products);

  const increaseCount = async () => {
    dispatch(increase({ ...product, amount: count + 1 }));
  };
  const reduceCount = async () => {
    dispatch(reduce({ ...product, amount: count - 1 }));
  };
  const addProduct = async () => {
    if (itemsOnCart.length > 0) {
      let isItemExit = itemsOnCart.find(prod => prod.id === product.id);
      if (!isItemExit) {
        dispatch(add({ ...product, amount: count }));
      } else {
        ToastAndroid.showWithGravity(
          'Product is already exits in your cart',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    } else {
      dispatch(add({ ...product, amount: count }));
    }
  };
  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <TabBar showBackButton onBackPress={() => { }} label={product.name} />
        <Image resizeMode='contain' style={{ width: '100%', height: 400 }} source={product.image} />

        <View style={{ marginTop: 40 }}>
          <Text style={styles.nameFood}>{product.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabelNumber}> {formatVNCurrencyTypeNumber(product.price)}</Text>
            <Text style={styles.priceLabel}>/st</Text>
          </View>
          <Text style={styles.title}>Golden Ripe Alphonsa mangoes delivered to your house in the most hygenic way ever...
            Best for eating plain but can also be made into shakes and cakes. </Text>
        </View>
        <View style={styles.quantityAndFavorite} >
          <View style={styles.qualityContainer}>
            <TouchableOpacity onPress={() => {
              if (count > 1) {
                setCount(prevCount => {
                  return prevCount - 1;
                });
                reduceCount();
              }
            }} style={styles.touchableOpacity}>
              <Text
                style={styles.touchableOpacityLabel}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={styles.touchableOpacityLabel}>{count}</Text>
            <TouchableOpacity onPress={async () => {
              setCount(prevCount => {
                return prevCount + 1;
              });
              increaseCount();
            }} style={styles.touchableOpacity}>
              <Text
                style={styles.touchableOpacityLabel}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.iconTim}
            source={require('../assets/icon/ic_tim.png')} />
        </View>
        <Button onPress={() => {
          addProduct()
        }} label="Add to cart" />
        <Text style={styles.titleYouNeed}>You may also need</Text>
        <View>
          <FlatList
            style={{ marginTop: 28, paddingLeft: 16 }}
            data={productData}
            renderItem={renderProductItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  )
}

export default FoodInformationScreen

const styles = StyleSheet.create({
  titleYouNeed: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.6,
    color: '#6D3805',
    marginTop: 40,
  },
  iconTim: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  quantityAndFavorite: {
    marginBottom: 30,
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  touchableOpacityLabel: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 28.8,
    color: '#6D3805',
  },
  touchableOpacity: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qualityContainer: {
    marginTop: 20,
    width: 300,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
    borderRadius: 30,
    padding: 5,
  },
  title: {
    marginTop: 20,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.2,
    letterSpacing: -0.17,
    color: '#6D3805',
  },
  priceLabel: {
    marginTop: 5,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.2,
    letterSpacing: -0.17,
    color: '#6D3805',
  },
  priceLabelNumber: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 28.8,
    letterSpacing: -0.17,
    color: '#6D3805',
  },
  priceContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  nameFood: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28.8,
    color: '#6D3805',
  },
  imageFood: {
    top: -50,
    left: 126,
  },
  imageCream: {
    top: -40,
    left: 185,
  },
  backIcon: {
    width: 8.49,
    height: 14,
  },
})