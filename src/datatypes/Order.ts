import {delivery} from '../constant/FakeDate';
import {Product} from './Product';
export type Order = () => {
  products: Product[];
  delivery: delivery;
  time: string[];
  totoalAmount: number;
};
