import { ImageSourcePropType } from 'react-native';
import { Product } from '../datatypes/Product';
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

  // {
  //   amount: 1,
  //   id: 2,
  //   image: require('../assets/images/salmon.png'),
  //   name: 'Salmon',
  //   weight: 6,
  //   price: 143000,
  // },
  // {
  //   amount: 1,
  //   id: 3,
  //   image: require('../assets/images/orance.png'),
  //   name: 'Orange',
  //   weight: 6,
  //   price: 113000,
  // },
  // {
  //   amount: 1,
  //   id: 4,
  //   image: require('../assets/images/paple.png'),
  //   name: 'Paple',
  //   weight: 6,
  //   price: 73000,
  // },
  // {
  //   amount: 1,
  //   id: 5,
  //   image: require('../assets/images/mango.png'),
  //   name: 'Mango',
  //   weight: 6,
  //   price: 123000,
  // },
  // {
  //   amount: 1,
  //   id: 6,
  //   image: require('../assets/images/watermelo.png'),
  //   name: 'Water Melon',
  //   weight: 6,
  //   price: 113000,
  // },
  // {
  //   amount: 1,
  //   id: 7,
  //   image: require('../assets/images/straw.png'),
  //   name: 'Strawberry',
  //   weight: 6,
  //   price: 93000,
  // },
  // {
  //   amount: 1,
  //   id: 8,
  //   image: require('../assets/images/peach.png'),
  //   name: 'Peach',
  //   weight: 6,
  //   price: 143000,
  // },

  // {
  //   amount: 1,
  //   id: 9,
  //   image: require('../assets/images/grape.png'),
  //   name: 'Grapee',
  //   weight: 6,
  //   price: 123000,
  // }, {
  //   amount: 1,
  //   id: 11,
  //   image: require('../assets/images/greenapple.png'),
  //   name: 'Green apple',
  //   weight: 6,
  //   price: 123000,
  // },

