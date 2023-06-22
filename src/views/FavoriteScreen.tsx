import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import TabBar from '../components/Tabbar';
import Button from '../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenContainer from '../components/ScreenContainer';

const FavoriteScreen = () => {
  return (
    <ScreenContainer>
      <ScrollView>
        <Image
          style={styles.imageBack}
          source={require('../assets/icon/Back.png')}
        />
        <TabBar label="Favorite" />
        <Image
          style={styles.imgFav}
          source={require('../assets/images/favorite.png')}
        />
        <Text style={styles.titleFavorite}>Your heart is empty</Text>
        <Text style={styles.titleFavorite2}>
          Start fall in love with some good goods
        </Text>
        <Button label="Start shoping" />
      </ScrollView>
    </ScreenContainer>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  imgFav: {
    alignSelf: 'center',
  },
  titleFavorite2: {
    fontWeight: '400',
    fontSize: 16,
    width: 253,
    lineHeight: 21,
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#6D3805',
    justifyContent: 'center',
    marginBottom: 60,
  },
  titleFavorite: {
    marginTop: 20,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.165,
    color: '#6D3805',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  imageBack: {
    width: 9,
    height: 14,
  },
});
