/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, Text, View,
} from 'react-native';
import Card from './src/components/Card';

function App(): JSX.Element {

  return (
    <SafeAreaView style={{ padding: 50 }}>
      <Card image={require('./src/assert/images/purepng1.png')} name='Red Apple' price='4,99' weight='1kg,priceg' />
      <View style={{ marginTop: 12 }}>
        <Card image={require('./src/assert/images/PikPng1.png')} name='Orginal Banana' price='5,99' weight='1kg,priceg' />
      </View>
      <Text> Phú quí </Text>
    </SafeAreaView>
  );
}

export default App;
