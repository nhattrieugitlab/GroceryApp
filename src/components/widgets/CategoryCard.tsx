import { View, Text, ImageRequireSource, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

type CardProps = {
    image: ImageRequireSource,
    title: string,
    backgroundColor: string
}

function CategoryCard({ image, title, backgroundColor }: CardProps): JSX.Element {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.boxImage, { backgroundColor: backgroundColor }]}>
                <Image source={image} resizeMode='center' style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100
    }, boxImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }, image: {
        width: '75%',
        height: '75%'
    }, title: {
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        color: '#6D3805',
        marginTop: 16
    }

})

export default CategoryCard