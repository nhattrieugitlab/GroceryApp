import {
  View,
  Text,
  ImageRequireSource,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

type CardProps = {
  photo: string;
  title: string;
  backgroundColor: string;
};

function CategoryCard({ photo, title, backgroundColor }: CardProps): JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.boxImage, { backgroundColor: backgroundColor }]}>
        <Image source={{ uri: photo }} resizeMode="center" style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
  },
  boxImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    color: '#6D3805',
    marginTop: 16,
  },
});

export default CategoryCard;
