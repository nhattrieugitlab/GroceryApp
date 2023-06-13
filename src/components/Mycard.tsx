import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabBar from '../components/Tabbar'

const Mycard : React.FC = () => {
  return (
    <View style={styles.container}>
        <View style={styles.Image}>
        <Image style={styles.image} source={require('../assets/icon/Back.png')} />
        <Image style={styles.image} source={require('../assets/icon/Add.png')} />
        </View>
        <TabBar label="My Cards" />
        <View style={styles.header}>
        <View style={styles.card}>
            <Image source={require('../assets/images/Pay.png')}/>
            <View style={{marginEnd:60}}>
                <Text style={styles.text}>My Card</Text>
                <Text >**** **** **** 1234</Text>
            </View>
            <Image source={require('../assets/icon/Next.png')}/>
        </View>
        <Image  source={require('../assets/icon/Line.png')}/>
        <View style={styles.card}>
            <Image source={require('../assets/images/Pay.png')}/>
            <View style={{marginEnd:60}}>
                <Text style={styles.text}>My Card</Text>
                <Text >**** **** **** 1234</Text>
            </View>
            <Image source={require('../assets/icon/Next.png')}/>
        </View>
        <Image  source={require('../assets/icon/Line.png')}/>
        <View style={styles.card}>
            <Image source={require('../assets/images/Pay2.png')}/>
            <View style={{marginEnd:85}}>
                <Text style={styles.text}>Apple Pay</Text>
                
            </View>
            <Image source={require('../assets/icon/Next.png')}/>
        </View>
        <Image  source={require('../assets/icon/Line.png')}/>
        </View>
    </View>
  )
}

export default Mycard

const styles = StyleSheet.create({
    header:{
        marginTop:60,
    },
    text:{
        fontFamily:'Klarna Text',
        fontSize:18,
        fontWeight:'700',
        color:'#6D3805',
       
    },
    card:{
        width: 343,
        height: 80,
        borderRadius: 10,
          
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 20,                   
    },
    Image:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    container:{
        flex:1,
        padding:20,
    },
    image:{
        width: 12,
        height: 14,
    },
})