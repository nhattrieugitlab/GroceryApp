import {ImageSourcePropType} from 'react-native';

export type Product = {
  id: number;
  amount?: number;
  name: string;
  image: ImageSourcePropType;
  price: number;
  weight?: number;
};
