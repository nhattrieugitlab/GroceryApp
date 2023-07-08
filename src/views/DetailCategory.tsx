import React, { useState, ReactElement } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { productData } from '../constant/FakeDate';

import TabBar from '../components/Tabbar';
import SearchInput from '../components/SearchInput';
import { Product } from '../datatypes/Product';
import ProductCard from '../components/ProductCard';

type ScreenProps = {
  item: Object
};

type filterItem = {
  id: number,
  value: string
}
const filter: filterItem[] = [{
  id: 0,
  value: "Fruits"
}, {
  id: 1,
  value: "Vegtables"
}, {
  id: 2,
  value: "Meat"
}, {
  id: 3,
  value: "Fish"
}, {
  id: 4,
  value: "Sea food"
}]

productData.splice(1, 0, {
  id: -1,
  image: require('../assets/images/detailSale.png'),
  name: '',
  weight: 0,
  price: 0
})

function DetailCategory({ item }: ScreenProps): JSX.Element {

  const [filterSelect, setFilterSelect] = useState(0)

  const renderFilter = ({ item }: { item: filterItem }) => {
    return (
      <TouchableOpacity onPress={() => { setFilterSelect(item.id) }}>
        <Text style={{ fontWeight: '400', fontSize: 20, lineHeight: 24, color: '#804F1E', paddingHorizontal: 16, paddingVertical: 8 }}>
          {item.value}
        </Text>
        <View style={filterSelect === item.id ? { height: 3, backgroundColor: '#FF5E00', borderTopLeftRadius: 3, borderTopRightRadius: 3 } : { height: 1, backgroundColor: '#f3f3f3', marginTop: 2 }} />
      </TouchableOpacity>
    )
  }

  const renderProductItem = ({ item }: { item: Product }): ReactElement => {
    if ((item).id === -1) {
      return (
        <Image source={(item as Product).image} style={{ width: 163, height: 148 }} />
      );
    } else {
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
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
          <View>
            <Image source={require('../assets/icon/Back.png')} style={{ width: 8.49, height: 14 }} />
          </View>
          <TabBar label='Fruits' />
        </View>
        <SearchInput />
      </View>
      <View>
        <FlatList
          style={{ marginTop: 8 }}
          data={filter}
          horizontal
          renderItem={renderFilter}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ alignItems: 'center', paddingTop: 16, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ paddingLeft: 16 }}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              {productData
                .filter(item => item.id % 2 === 0)
                .map(item => (
                  <View style={{ margin: 5, width: 170, marginBottom: 16 }}>
                    <ProductCard
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      weight={item.weight}
                      price={item.price}
                    />
                  </View>
                ))}
            </View>
            <View>
              {productData
                .filter(item => item.id % 2 != 0)
                .map(item => {
                  if (item.id === -1) {
                    return (
                      <View style={{ margin: 5, marginBottom: 16 }}>
                        <Image source={(item as Product).image} style={{ width: 153, height: 148 }} />
                      </View>
                    )
                  } else return (
                    <View style={{ margin: 5, width: 170, marginBottom: 16 }}>
                      <ProductCard
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        weight={item.weight}
                        price={item.price}
                      />
                    </View>
                  )
                })}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView >
  );
}

export default DetailCategory;