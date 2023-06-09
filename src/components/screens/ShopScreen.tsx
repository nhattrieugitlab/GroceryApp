import React from 'react';
import {
    FlatList,
    Image,
    ImageRequireSource,
    SafeAreaView, Text, TouchableOpacity, View,
} from 'react-native';
import CategoryCard from '../widgets/CategoryCard';
import ProductCard from '../widgets/ProductCard';

type categoryItem = {
    image: ImageRequireSource,
    title: string,
    backgroundColor: string
}

type productItem = {
    image: ImageRequireSource,
    name: string,
    weight: string,
    price: string
}

const categoryData: categoryItem[] = [{
    image: require('../../assert/images/c1.png'),
    title: 'Fruits',
    backgroundColor: '#EDD0FF'
}, {
    image: require('../../assert/images/c2.png'),
    title: 'Vegtables',
    backgroundColor: '#FFD9BA'
}, {
    image: require('../../assert/images/c3.png'),
    title: 'Meat',
    backgroundColor: '#FACCCC'
}, {
    image: require('../../assert/images/c4.png'),
    title: 'Fish',
    backgroundColor: '#FBC1BD'
}, {
    image: require('../../assert/images/c5.png'),
    title: 'Sea food',
    backgroundColor: '#FFE299'
}]

const productData: productItem[] = [{
    image: require('../../assert/images/p1.png'),
    name: 'Red Apple',
    weight: '1kg,priceg',
    price: '4,99'
}, {
    image: require('../../assert/images/p2.png'),
    name: 'Orginal Banana',
    weight: '1kg,priceg',
    price: '5,99'
}, {
    image: require('../../assert/images/p1.png'),
    name: 'Red Apple',
    weight: '1kg,priceg',
    price: '4,99'
}, {
    image: require('../../assert/images/p2.png'),
    name: 'Orginal Banana',
    weight: '1kg,priceg',
    price: '5,99'
}]

const renderCategoryItem = ({ item }: { item: categoryItem }) => {
    return (
        <View style={{ marginRight: 10 }}>
            <CategoryCard image={item.image} title={item.title} backgroundColor={item.backgroundColor} />
        </View>
    )
}

const renderProductItem = ({ item }: { item: productItem }) => {
    return (
        <View style={{ margin: 5, marginRight: 11, marginBottom: 16 }}>
            <ProductCard image={item.image} name={item.name} weight={item.weight} price={item.price} />
        </View>
    )
}

function ShopSreen(): JSX.Element {

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
                    <Image source={require('../../assert/images/location.png')} style={{ width: 16.88, height: 22.5 }} />
                    <Text style={{ fontWeight: '700', fontSize: 24, lineHeight: 28.8, color: '#FF5E00', marginLeft: 8.62 }}>
                        Lungangen
                    </Text>
                </View>
                <View style={{ marginTop: 18 }}>
                    <View style={{ borderRadius: 7, height: 48, backgroundColor: '#F3F3F3' }}>
                        <Text >
                            Replace with search widget
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 34, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 21, marginLeft: 8 }}>
                    <Text style={{ fontWeight: '700', fontSize: 22, lineHeight: 26.4, color: '#6D3805' }}>
                        Categories
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: '400', fontSize: 18, lineHeight: 21.6, color: '#FF5E00' }}>
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
            <View style={{ marginTop: 53.17, paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 21, marginLeft: 8 }}>
                <Text style={{ fontWeight: '700', fontSize: 22, lineHeight: 26.4, color: '#6D3805' }}>
                    Popular Deals
                </Text>
                <TouchableOpacity>
                    <Text style={{ fontWeight: '400', fontSize: 18, lineHeight: 21.6, color: '#FF5E00' }}>
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
        </View>
    );
}

export default ShopSreen;