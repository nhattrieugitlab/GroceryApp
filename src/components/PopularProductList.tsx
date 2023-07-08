import { Text, View, TouchableOpacity, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import ProductCard from './ProductCard';
import { productData } from '../constant/FakeDate';
import { useCallback } from 'react'
import { Product } from '../datatypes/Product';
const PopularProductList = () => {
  const renderProductItem: ListRenderItem<Product> = useCallback(({ item }) => {
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
  }, [])
  return (
    <>
      <View
        style={styles.container}>
        <Text
          style={styles.title}>
          Popular Deals
        </Text>
        <TouchableOpacity>
          <Text
            style={styles.title2}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          style={{ marginTop: 28 }}
          data={productData}
          renderItem={renderProductItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 26.4,
    color: '#6D3805',
  },
  title2: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 21.6,
    color: '#FF5E00',
  }
})
export default PopularProductList
