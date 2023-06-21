import ScreenContainer from '../../components/ScreenContainer';
import {StyleSheet, Text, View} from 'react-native';
import SelectLocationCard from './SelectLocationCard';
import {useState} from 'react';
import {AddressToString} from '../../utilities/AddressToString';
import {Address} from '../../datatypes/LocationDataTypes';
import TabBar from '../../components/Tabbar';
import ExpectedTimeCard from './ExpectedTimeCard';
import ShowItemCard from './SeeItemCard';

const PaymentScreen = () => {
  const [address, setAddress] = useState<string>('');
  return (
    <ScreenContainer>
      <TabBar style={{marginBottom: 13}} label="Payment" />
      <SelectLocationCard
        address={address}
        onGetLocationComplete={(address: Address) => {
          setAddress(AddressToString(address));
        }}
      />
      <ShowItemCard />
      <ExpectedTimeCard />
    </ScreenContainer>
  );
};
export const PaymentScreenStyles = StyleSheet.create({});
export default PaymentScreen;
