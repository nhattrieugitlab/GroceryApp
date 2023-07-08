import {AxiosResponse} from 'axios';
import AxiosInstance from '../utilities/AxiosInstance';
import {ProductCategory} from '../datatypes/ProductCategory';

export const getProductCategory = async () => {
  try {
    const productCategories = await AxiosInstance().get<ProductCategory[]>(
      'product/getCategory',
    );
    return productCategories;
  } catch (err) {
    console.log('loi lay du lieu tu sever');
  }
};
