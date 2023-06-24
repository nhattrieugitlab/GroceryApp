import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList, ListRenderItem, ImageSourcePropType, } from 'react-native'
import React, { useState } from 'react'
import ScreenContainer from '../components/ScreenContainer'
import Button from '../components/Button';
import { Product } from '../datatypes/Product';
import ProductCard from '../components/ProductCard';




const productData: Product[] = [
  {
    id:1,
    image: require('../assets/images/p1.png'),
    name: 'Red Apple',
    weight: 1,
    price: 85000,
  },
  {
    id:2,
    image: require('../assets/images/p2.png'),
    name: 'Orginal Banana',
    weight: 2,
    price: 132000,
  },
  {
    id:3,
    image: require('../assets/images/p1.png'),
    name: 'Red Apple',
    weight: 1,
    price: 12000,
  },
  {
    id:4,
    image: require('../assets/images/p2.png'),
    name: 'Orginal Banana',
    weight: 6,
    price: 143000,
  },
];



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
type Props = {
  nameFood: string;
  priceFood: number;
  imageFood: ImageSourcePropType;
  infoFood: string;
};
function FoodInformationScreen({ nameFood, priceFood, imageFood, infoFood }: Props): JSX.Element {
  const [count, setCount] = useState<number>(2);
  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <Image
            style={styles.backIcon}
            source={require('../assets/icon/Back.png')} />
          <Image
            style={styles.imageCream}
            source={require('../assets/images/cream.png')} />
          <Image
            style={styles.imageFood}
            source={require('../assets/images/mango.png')} />
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.nameFood}>Orginal Mango {nameFood}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabelNumber}>$3.00 {priceFood}</Text>
            <Text style={styles.priceLabel}>/st</Text>
          </View>
          <Text style={styles.title}>Golden Ripe Alphonsa mangoes delivered to your house in the most hygenic way ever...
            Best for eating plain but can also be made into shakes and cakes. {infoFood}</Text>
        </View>
        <View style={styles.quantityAndFavorite} >
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
          <Image
            style={styles.iconTim}
            source={require('../assets/icon/ic_tim.png')} />
        </View>
        <Button label="Add to cart" />
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