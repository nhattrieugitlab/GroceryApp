import { Product } from '../datatypes/Product';
const getTotalAmount = (itemOnCart: Product[]) => {
  return itemOnCart.reduce((accumulator, product) => {
    let total = 0;
    product.count
      ? (total = accumulator + product.price * product.count)
      : accumulator + total;
    return total;
  }, 0);
};
export default getTotalAmount;
