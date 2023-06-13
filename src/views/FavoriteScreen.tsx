import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import TabBar from '../components/Tabbar';
import Button from '../components/Button';

const FavoriteScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBack}
        source={require('../assets/icon/Back.png')}
      />
      <TabBar label="Favorite" />
      <Image source={require('../assets/images/favorite.png')}/>
      <Text style = {styles.titleFavorite}>Your heart is empty</Text>
      <Text style = {styles.titleFavorite2}>Start fall in love with some good goods</Text>
      <View style={styles.button}>
        <Button label="Start shoping" />
      </View>
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    button: {
        width: '100%',
        top: 150,
        justifyContent: 'center',
        alignItems: 'center',
      },
    titleFavorite2:{
        fontWeight : '400',
        fontSize: 16,
        lineHeight: 21,
        alignItems: 'center',
        textAlign: 'center',
        color: '#6D3805',
        justifyContent: 'center',
    },
    titleFavorite:{
        marginTop: 20,
        fontWeight:'700',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: -0.165,
        color: '#6D3805',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    container: {
        padding: 20,
      },

    imageBack: {
        width: 9,
        height: 14,
      },
})