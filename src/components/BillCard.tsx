import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import formatVNCurrencyTypeNumber from '../utilities/CurrencyConverter'


type BillCardProps = {
    priceSubtotal: number
    priceDelivery: number
}
const BillCard: React.FC<BillCardProps> = ({ priceDelivery, priceSubtotal }) => {
    return (
        <View style={styles.container}>
            <View style={{ padding: 15 }}>
                <Text style={styles.text1}>Oder Sammery</Text>
                <View style={styles.o1}>
                    <Text style={styles.text2}>Subtotal</Text>
                    <Text style={styles.text2}>{formatVNCurrencyTypeNumber(priceSubtotal)}</Text>
                </View>
                <View style={styles.o1}>
                    <Text style={styles.text2}>Tax</Text>
                    <Text style={styles.text2}>{formatVNCurrencyTypeNumber((priceDelivery + priceSubtotal) * 0.01)}</Text>
                </View>
                <View style={styles.o1}>
                    <Text style={styles.text2}>Delivery Price</Text>
                    <Text style={styles.text2}>{formatVNCurrencyTypeNumber(priceDelivery)}</Text>
                </View>
            </View>
            <Image style={{ width: 343.023 }} source={require('../assets/icon/Line.png')} />
            <View style={styles.text3}>
                <Text style={styles.text1}>Toltal : </Text>
                <Text style={styles.text1}>{formatVNCurrencyTypeNumber(priceDelivery + priceSubtotal + (((priceDelivery + priceSubtotal) * 0.05)))}</Text>
            </View>
        </View>
    )
}

export default BillCard
const styles = StyleSheet.create({
    text3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 13

    },
    text2: {
        fontSize: 18,
        fontFamily: 'Klarna Text',
        color: '#6D3805',
    },
    o1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    text1: {
        fontWeight: '700',
        fontSize: 18,
        color: '#6D3805',
        fontFamily: 'Klarna Text',
    },
    container: {
        backgroundColor: '#FFF4E9',
        width: 343,
        height: 209,
        borderRadius: 20,
        margin: 16,
        borderColor: '#FFE6CC',
        borderWidth: 1,
    },
})