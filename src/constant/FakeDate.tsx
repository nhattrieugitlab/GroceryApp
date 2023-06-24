import {ImageSourcePropType} from 'react-native';
import {Product} from '../datatypes/Product';
export const fakeCartData: Product[] = [];
export type delivery = {
  time: string;
  name: string;
  price: number;
  img: ImageSourcePropType;
};
export const deliverys: delivery[] = [
  {
    name: 'ghn',
    img: require('../assets/images/ic_ghn.png'),
    price: 20000,
    time: '2-3 days',
  },
  {
    name: 'ghtk',
    img: require('../assets/images/ic_vtpost.png'),

    price: 24000,
    time: '4-5 days',
  },
  {
    name: 'vtp',
    img: require('../assets/images/ghtk.png'),

    price: 53000,
    time: '1 days',
  },
  {
    name: 'shopeeex',
    img: require('../assets/images/ic_shopee_express.png'),

    price: 21200,
    time: '1-2 days',
  },
];
