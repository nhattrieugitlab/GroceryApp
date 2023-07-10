import { Alert } from 'react-native';
import { Product } from '../datatypes/Product';
const ShowItemAlert = (itemOncard: Product[]) => {
  let message = '';
  for (let i = 0; i < itemOncard.length; i++) {
    message += `${itemOncard[i].name} (x${itemOncard[i].count}) \n`;
  }
  Alert.alert('Detail Items', message);
};
export default ShowItemAlert;
