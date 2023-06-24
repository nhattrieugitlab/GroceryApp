import React from 'react';
import { View, Text, ImageRequireSource, FlatList, SafeAreaView } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import SearchInput from '../components/SearchInput';
import ScreenContainer from '../components/ScreenContainer';

type categoryItem = {
  image: ImageRequireSource;
  title: string;
  backgroundColor: string;
};

const categoryData: categoryItem[] = [
  {
    image: require('../assets/images/c1.png'),
    title: 'Fruits',
    backgroundColor: '#EDD0FF',
  },
  {
    image: require('../assets/images/c2.png'),
    title: 'Vegtables',
    backgroundColor: '#FFD9BA',
  },
  {
    image: require('../assets/images/c3.png'),
    title: 'Meat',
    backgroundColor: '#FACCCC',
  },
  {
    image: require('../assets/images/c4.png'),
    title: 'Fish',
    backgroundColor: '#FBC1BD',
  },
  {
    image: require('../assets/images/c5.png'),
    title: 'Sea food',
    backgroundColor: '#FFE299',
  },
  {
    image: require('../assets/images/c1.png'),
    title: 'Fruits',
    backgroundColor: '#EDD0FF',
  },
  {
    image: require('../assets/images/c2.png'),
    title: 'Vegtables',
    backgroundColor: '#FFD9BA',
  },
  {
    image: require('../assets/images/c3.png'),
    title: 'Meat',
    backgroundColor: '#FACCCC',
  },
  {
    image: require('../assets/images/c4.png'),
    title: 'Fish',
    backgroundColor: '#FBC1BD',
  },
  {
    image: require('../assets/images/c5.png'),
    title: 'Sea food',
    backgroundColor: '#FFE299',
  },
  {
    image: require('../assets/images/c1.png'),
    title: 'Fruits',
    backgroundColor: '#EDD0FF',
  },
  {
    image: require('../assets/images/c2.png'),
    title: 'Vegtables',
    backgroundColor: '#FFD9BA',
  },
  {
    image: require('../assets/images/c3.png'),
    title: 'Meat',
    backgroundColor: '#FACCCC',
  },
  {
    image: require('../assets/images/c4.png'),
    title: 'Fish',
    backgroundColor: '#FBC1BD',
  },
  {
    image: require('../assets/images/c5.png'),
    title: 'Sea food',
    backgroundColor: '#FFE299',
  },
  {
    image: require('../assets/images/c1.png'),
    title: 'Fruits',
    backgroundColor: '#EDD0FF',
  },
  {
    image: require('../assets/images/c2.png'),
    title: 'Vegtables',
    backgroundColor: '#FFD9BA',
  },
  {
    image: require('../assets/images/c3.png'),
    title: 'Meat',
    backgroundColor: '#FACCCC',
  },
  {
    image: require('../assets/images/c4.png'),
    title: 'Fish',
    backgroundColor: '#FBC1BD',
  },
  {
    image: require('../assets/images/c5.png'),
    title: 'Sea food',
    backgroundColor: '#FFE299',
  },
  {
    image: require('../assets/images/c1.png'),
    title: 'Fruits',
    backgroundColor: '#EDD0FF',
  },
  {
    image: require('../assets/images/c2.png'),
    title: 'Vegtables',
    backgroundColor: '#FFD9BA',
  },
  {
    image: require('../assets/images/c3.png'),
    title: 'Meat',
    backgroundColor: '#FACCCC',
  },
  {
    image: require('../assets/images/c4.png'),
    title: 'Fish',
    backgroundColor: '#FBC1BD',
  },
  {
    image: require('../assets/images/c5.png'),
    title: 'Sea food',
    backgroundColor: '#FFE299',
  },
];

const renderCategoryItem = ({ item }: { item: categoryItem }) => {
  return (
    <View style={{ marginRight: 22, marginBottom: 32 }}>
      <CategoryCard
        image={item.image}
        title={item.title}
        backgroundColor={item.backgroundColor}
      />
    </View>
  );
};

const ExploreScreen = (): React.JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 24,
            lineHeight: 28.8,
            color: '#FF5E00',
            marginLeft: 8.62,
            marginTop: 16,
            textAlign: 'center',
          }}>
          Categories
        </Text>
        <View style={{ marginTop: 16 }}>
          <SearchInput />
        </View>
      </View>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <FlatList
          style={{ marginTop: 16, paddingTop: 16, paddingLeft: 16 }}
          data={categoryData}
          renderItem={renderCategoryItem}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
