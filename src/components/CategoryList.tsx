import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import CategoryCard from './CategoryCard';
import { ProductCategory } from '../datatypes/ProductCategory';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { fetchProductCategory } from '../redux/productCategorySlice';
import { AppDispatch, RootState } from '../redux/store';
const CategoryList = () => {
    const renderCategoryItem = ({ item }: { item: ProductCategory }) => {
        return (
            <View style={{ width: 120 }}>
                <CategoryCard
                    photo={item.photo}
                    title={item.name}
                    backgroundColor={item.photo}
                />
            </View>
        );
    };
    const categories: ProductCategory[] = useSelector((state: RootState) => state.productCategory.productCategories)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        if (categories.length == 0) {
            dispatch(fetchProductCategory())
        }
    }, [dispatch])
    return <View style={{
        height: 250
    }}>
        <View
            style={styles.container}>
            <Text
                style={styles.title}>
                Categories
            </Text>
            <TouchableOpacity>
                <Text
                    style={styles.title2}>
                    See All
                </Text>
            </TouchableOpacity>
        </View>
        {
            categories && <FlatList
                style={{ marginTop: 32, paddingLeft: 16 }}
                data={categories}
                renderItem={renderCategoryItem}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        }
    </View>
}
const styles = StyleSheet.create({
    container: {
        marginTop: 34,
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
export default CategoryList