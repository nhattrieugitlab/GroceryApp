import ScreenContainer from '../../components/ScreenContainer';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import SelectLocationCard from './SelectLocationCard';
import {useState} from 'react';
import {AddressToString} from '../../utilities/AddressToString';
import {Address} from '../../datatypes/LocationDataTypes';
import TabBar from '../../components/Tabbar';
import ExpectedTimeCard from './ExpectedTimeCard';
import ShowItemCard from './SeeItemCard';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CartNavigationParams} from '../../routes/CartNavigatior';
import PaymentMethodCard from './PaymentMethodCard';
import {
  PaymentMethodNavigatorParams,
  PaymentScreenProps,
} from '../../routes/PaymentmethodNavigator';
const PaymentScreen = () => {
  const [address, setAddress] = useState<string>('');

  const cartNavigation =
    useNavigation<NativeStackNavigationProp<CartNavigationParams>>();
  const paymentNavigation =
    useNavigation<NativeStackNavigationProp<PaymentMethodNavigatorParams>>();
  const route = useRoute<PaymentScreenProps['route']>();
  const {defaultMethod}: any = route.params || 'cash on delivery';
  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TabBar
          showBackButton
          onBackPress={() => {
            cartNavigation.navigate('CartScreen');
          }}
          style={{marginBottom: 13}}
          label="Payment"
        />
        <SelectLocationCard
          address={address}
          onGetLocationComplete={(address: Address) => {
            setAddress(AddressToString(address));
          }}
        />
        <ExpectedTimeCard />
        <ShowItemCard />
        <PaymentMethodCard
          cashOnDelivery={defaultMethod === 'Cash on delivery'}
          onPress={() => {
            paymentNavigation.navigate('SelectPaymentMethodScreen');
          }}
          cardNumber={defaultMethod}
        />
      </ScrollView>
    </ScreenContainer>
  );
};
export const PaymentScreenStyles = StyleSheet.create({});
export default PaymentScreen;
