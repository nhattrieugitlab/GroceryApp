import {Address} from '../datatypes/LocationDataTypes';

export const AddressToString = (address: Address) => {
  return `${address.CommnueName}, ${address.DistricName}, ${address.ProvinceName} (${address.DetailAddress})`;
};
