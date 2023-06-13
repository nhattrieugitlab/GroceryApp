import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageRequireSource,
  FlatList,
} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import SearchInput from '../components/SearchInput';

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

const renderCategoryItem = ({item}: {item: categoryItem}) => {
  return (
    <View style={{marginRight: 22, marginBottom: 27}}>
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
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{paddingHorizontal: 16, paddingTop: 16}}>
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
        <SearchInput />
      </View>
      <View style={{alignItems: 'center'}}>
        <FlatList
          style={{marginTop: 29, paddingLeft: 16}}
          data={categoryData}
          renderItem={renderCategoryItem}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ExploreScreen;
