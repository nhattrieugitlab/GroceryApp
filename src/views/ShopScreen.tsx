import React from 'react';
import {
  FlatList,
  Image,
  ImageRequireSource,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from 'react-native';
import { productData } from '../constant/FakeDate';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import SearchInput from '../components/SearchInput';
import ScreenContainer from '../components/ScreenContainer';
import { Product } from '../datatypes/Product';

type categoryItem = {
  image: ImageRequireSource;
  title: string;
  backgroundColor: string;
};

const categoryData: categoryItem[] = [
  {
    image: require('../assets/images/c1.png'),
    title: 'Fruits',
    backgroundColor: '#EDD0FF',
  },
  {
    image: require('../assets/images/c2.png'),
    title: 'Vegtables',
    backgroundColor: '#FFD9BA',
  },
  {
    image: require('../assets/images/c3.png'),
    title: 'Meat',
    backgroundColor: '#FACCCC',
  },
  {
    image: require('../assets/images/c4.png'),
    title: 'Fish',
    backgroundColor: '#FBC1BD',
  },
  {
    image: require('../assets/images/c5.png'),
    title: 'Sea food',
    backgroundColor: '#FFE299',
  },
];



const renderCategoryItem = ({ item }: { item: categoryItem }) => {
  return (
    <View style={{ width: 120 }}>
      <CategoryCard
        image={item.image}
        title={item.title}
        backgroundColor={item.backgroundColor}
      />
    </View>
  );
};

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

function ShopScreen(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.containerPadding}>
        <View style={styles.headerBox}>
          <Image
            source={require('../assets/images/location.png')}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>Lungangen</Text>
        </View>
        <SearchInput />
        <View
          style={{
            marginTop: 34,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: 21,
            marginLeft: 8,
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 22,
              lineHeight: 26.4,
              color: '#6D3805',
            }}>
            Categories
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 18,
                lineHeight: 21.6,
                color: '#FF5E00',
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          style={{ marginTop: 32, paddingLeft: 16 }}
          data={categoryData}
          renderItem={renderCategoryItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View
        style={{
          marginTop: 53.17,
          paddingHorizontal: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginRight: 21,
          marginLeft: 8,
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 22,
            lineHeight: 26.4,
            color: '#6D3805',
          }}>
          Popular Deals
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 18,
              lineHeight: 21.6,
              color: '#FF5E00',
            }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          style={{ marginTop: 28, paddingLeft: 16 }}
          data={productData}
          renderItem={renderProductItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerPadding: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerBox: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28.8,
    color: '#FF5E00',
    marginLeft: 8.62,
  },
  headerImage: {
    width: 16.88,
    height: 22.5,
  },
});

export default ShopScreen;
