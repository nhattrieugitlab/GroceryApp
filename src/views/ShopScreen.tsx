import React from 'react';
import SearchInput from '../components/SearchInput';
import TabBar from '../components/Tabbar';
import CategoryList from '../components/CategoryList';
import ScreenContainer from '../components/ScreenContainer';
import { ScrollView } from 'react-native-gesture-handler';
import PopularProductList from '../components/PopularProductList';
function ShopScreen(): JSX.Element {
  return (
    <ScreenContainer>
      <TabBar label='Home' />
      <SearchInput />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoryList />
        <PopularProductList />
      </ScrollView>
    </ScreenContainer>
  );
}
export default ShopScreen;
