import {AxiosResponse} from 'axios';
import AxiosInstance from '../utilities/AxiosInstance';
import {ProductCategory} from '../datatypes/ProductCategory';
import {Product} from '../datatypes/Product';

export const getPopularProduct = async () => {
  try {
    const products = await AxiosInstance().get<Product[]>(
      'product/getpopularproducts',
    );
    return products;
  } catch (err) {
    console.log('loi lay du lieu tu sever');
  }
};
