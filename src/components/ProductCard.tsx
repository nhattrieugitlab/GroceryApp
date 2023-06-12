import { View, Text, ImageRequireSource, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

type CardProps = {
    image: ImageRequireSource,
    name: string,
    weight: string,
    price: string
}

function ProductCard({ image, name, weight, price }: CardProps): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.boxImage}>
                <Image source={image} resizeMode='contain' style={styles.image} />
            </View>
            <View style={styles.boxInfo}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.weight}>
                    {weight}
                </Text>
                <Text style={styles.price}>
                    {'$ ' + price}
                </Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
                <View style={styles.boxImageAdd}>
                    <View style={[{ width: '100%', height: 2.15, top: 5.12 }, styles.line]} />
                    <View style={[{ width: 2.15, height: '100%', left: 5.12 }, styles.line]} />
                </View>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 189,
        backgroundColor: '#FFFFFF',
        elevation: 5,
        borderRadius: 20,
        padding: 12
    }, boxImage: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 4
    }, image: {
        width: '80%',
        height: 169 * 0.5
    }, boxInfo: {
        marginTop: 12
    }, name: {
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 18.31,
        color: '#6D3805'
    }, weight: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.32,
        color: '#929292',
        marginTop: 1
    }, price: {
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        color: '#FF5E00',
        marginTop: 4
    }, addButton: {
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
        marginBottom: 12
    }, boxImageAdd: {
        width: 11.82,
        height: 11.82
    }, line: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        borderRadius: 20
    }

})
export default ProductCard;