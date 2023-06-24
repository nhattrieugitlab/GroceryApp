import {Product} from '../datatypes/Product';

const getTotalAmount = (itemOnCart: Product[]) => {
  return itemOnCart.reduce((accumulator, product) => {
    let total = 0;
    product.amount
      ? (total = accumulator + product.price * product.amount)
      : accumulator + total;
    return total;
  }, 0);
};
export default getTotalAmount;
