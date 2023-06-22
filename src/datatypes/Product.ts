import {ImageSourcePropType} from 'react-native';

export type Product = {
  name: string;
  image: ImageSourcePropType;
  price: number;
  weight?: number;
};
