import {ImageSourcePropType} from 'react-native';

export type Product = {
  amount?: number;
  name: string;
  image: ImageSourcePropType;
  price: number;
  weight?: number;
};
