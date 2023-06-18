import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


type OdersCardsProps = {
    label: string;
    status: string;
    date: string;
    price: string;
}
const OdersCards:React.FC<OdersCardsProps> = ({label,status,date,price}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/images/Oders.png')} />
      <View style={styles.text1}>
        <Text style={styles.textOder}>{label}</Text>
        <Text style={styles.textStatus}>{status}</Text>
        <Text style={styles.textDate}>{date}</Text>
      </View>
      <Text style={styles.price}>{'$' + price}</Text>
    </View>
  )
}

export default OdersCards

const styles = StyleSheet.create({
    price: {
        width: 58,
        height: 24,
        fontFamily: 'Klarma Text',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        color: '#F37A20',
        right: 16,
    },
    textDate: {
        width: 111,
        height: 17,
        fontFamily: 'Klarma Text',
        fontWeight: '400',
        fontSize:14,
        lineHeight:17,
        color:'#804F1E'
    },
    textStatus: {
        width: 62,
        height: 17,
        fontFamily: 'Klarma Text',
        fontWeight: '400',
        fontSize:14,
        lineHeight:17,
        color:'#5EC401'
    },
    textOder: {
        width: 105,
        height: 22,
        fontFamily: 'Klarma Text',
        color:' #804F1E',
        fontWeight:'700',
        fontSize:18,
        lineHeight:22,
    },
    text1: {
        right: 71,   
    },
    img: {
        width: 44,
        height: 44,
        // top: '4.5%',
        left: 16,
    },
    container: {
        width:'100%',
        height:80,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
        
    }
})