/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, View,
} from 'react-native';
import Card from './Card';

function App(): JSX.Element {

  return (
    <SafeAreaView style={{ padding: 50 }}>
      <Card image={require('./purepng1.png')} name='Red Apple' price='4,99' weight='1kg,priceg' />
      <View style={{ marginTop: 12 }}>
        <Card image={require('./PikPng1.png')} name='Orginal Banana' price='5,99' weight='1kg,priceg' />
      </View>
    </SafeAreaView>
  );
}

export default App;
