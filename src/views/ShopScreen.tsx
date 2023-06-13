import React from 'react';
import {
  FlatList,
  Image,
  ImageRequireSource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import SearchInput from '../components/SearchInput';

type categoryItem = {
  image: ImageRequireSource;
  title: string;
  backgroundColor: string;
};

type productItem = {
  image: ImageRequireSource;
  name: string;
  weight: string;
  price: string;
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

const productData: productItem[] = [
  {
    image: require('../assets/images/p1.png'),
    name: 'Red Apple',
    weight: '1kg,priceg',
    price: '4,99',
  },
  {
    image: require('../assets/images/p2.png'),
    name: 'Orginal Banana',
    weight: '1kg,priceg',
    price: '5,99',
  },
  {
    image: require('../assets/images/p1.png'),
    name: 'Red Apple',
    weight: '1kg,priceg',
    price: '4,99',
  },
  {
    image: require('../assets/images/p2.png'),
    name: 'Orginal Banana',
    weight: '1kg,priceg',
    price: '5,99',
  },
];

const renderCategoryItem = ({item}: {item: categoryItem}) => {
  return (
    <View style={{marginRight: 10}}>
      <CategoryCard
        image={item.image}
        title={item.title}
        backgroundColor={item.backgroundColor}
      />
    </View>
  );
};

const renderProductItem = ({item}: {item: productItem}) => {
  return (
    <View style={{margin: 5, marginRight: 11, marginBottom: 16}}>
      <ProductCard
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
    <View style={styles.container}>
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
          style={{marginTop: 32, paddingLeft: 16}}
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
          style={{marginTop: 28, paddingLeft: 16}}
          data={productData}
          renderItem={renderProductItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
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
