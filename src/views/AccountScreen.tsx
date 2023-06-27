import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppIcons } from '../constant/IconPath'
import TabBar from '../components/Tabbar'

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.iconBack} source={AppIcons.IconBack2} />
            <TabBar label='Account' />
            <View style={styles.words1}>
                <Image style={styles.img1} source={AppIcons.IconProfile} />
                <Text style={styles.text}>Profile</Text>
            </View>
            <View style={styles.words2}>
                <Image style={{width:27,height:27}} source={AppIcons.IconOders} />
                <Text style={styles.text2}>Oders</Text>
            </View>
            <View style={styles.words2}>
                <Image style={{width:21,height:27}} source={AppIcons.IconAddress} />
                <Text style={styles.text}>Address</Text>
            </View>
            <View style={styles.words2}>
                <Image style={{width:32,height:40}} source={AppIcons.IconPayment} />
                <Text style={styles.text3}>Payment</Text>
            </View>
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    iconBack: {
        width: 8.488,
        height: 14,
         
    },
    text3: {
        fontSize: 18,
        lineHeight: 27,
        fontWeight: '700',
        color: '#6D3805',
        marginLeft: 12,
        height: 27,
        fontFamily: ' Klarna Text',
    },
    text2: {
        fontSize: 18,
        lineHeight: 27,
        fontWeight: '700',
        color: '#6D3805',
        marginLeft: 15,
        height: 27,
        fontFamily: ' Klarna Text',
    },
    words2: {
        flexDirection: 'row',
        marginTop: 37,
    },
    words1: {
        flexDirection: 'row',
        marginTop: 20,
    },
    text: {
        fontSize: 18,
        lineHeight: 27,
        fontWeight: '700',
        color: '#6D3805',
        marginLeft: 20,
        height: 27,
        fontFamily: ' Klarna Text',
    },

    img1: {
        width: 20,
        height: 24,
    },
    container: {
        padding: 20,
    }
})