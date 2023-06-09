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
import CategoryCard from './src/components/widgets/CategoryCard';
import ProductCard from './src/components/widgets/ProductCard';
import ShopSreen from './src/components/screens/ShopScreen';
import ExploreScreen from './src/components/screens/ExploreScreen';

function App(): JSX.Element {

  return (
    <ShopSreen />
  );
}

export default App;
