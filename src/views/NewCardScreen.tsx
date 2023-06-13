import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import TabBar from '../components/Tabbar';
import Button from '../components/Button';
import IconBottomTabBar from '../components/IconBottomTabBar';

const NewCardScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBack}
        source={require('../assets/icon/Back.png')}
      />
      <TabBar label="New Card" />
      <View style={{marginTop: 20}}>
        <Text style={styles.text}>Card Number</Text>
        <TextInput style={styles.input} placeholder="xxxx xxxx xxxx xxxx" />
      </View>
      <View style={{marginTop: 60}}>
        <Text style={styles.text}>Expiry Date</Text>
        <TextInput style={styles.input} placeholder="MM/YY" />
      </View>
      <View style={{marginTop: 60}}>
        <Text style={styles.text}>CCV</Text>
        <TextInput style={styles.input} placeholder="****" />
      </View>
      <View style={styles.button}>
        <Button label="Add Card" />
      </View>
    </View>
  );
};

export default NewCardScreen;

const styles = StyleSheet.create({
  imageBack: {
    width: 9,
    height: 14,
  },
  button: {
    top: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Klarna Text',
    fontSize: 18,
    fontWeight: '700',
    color: '#6D3805',
  },
  input: {
    width: 343,
    height: 48,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
  },
  container: {
    padding: 20,
  },
});
