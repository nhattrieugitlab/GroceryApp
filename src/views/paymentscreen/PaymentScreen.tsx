import ScreenContainer from '../../components/ScreenContainer';
import { ScrollView, ListRenderItem } from 'react-native';
import SelectLocationCard from './SelectLocationCard';
import { useState, useEffect } from 'react';
import { AddressToString } from '../../utilities/AddressToString';
import { Address } from '../../datatypes/LocationDataTypes';
import TabBar from '../../components/Tabbar';
import ExpectedTimeCard from './ExpectedTimeCard';
import ShowItemCard from './SeeItemCard';
import { useNavigation } from '@react-navigation/native';
import { CartNavigationParams } from '../../routes/CartNavigatior';
import PaymentMethodCard from './PaymentMethodCard';
import {
  PaymentMethodNavigatorParams, PaymentScreenProps,
} from '../../routes/PaymentmethodNavigator';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { emptyCart } from '../../redux/productSlice';
import { FlatList } from 'react-native-gesture-handler';
import { delivery, deliverys } from '../../constant/FakeDate';
import DeliveryCard from '../../components/DeliveryCard';
import ShowItemAlert from '../../utilities/ShowItemAlert';
import getTotalAmount from '../../utilities/GetCartTotalAmount';
import formatVNCurrencyTypeNumber from '../../utilities/CurrencyConverter';
import BillCard from '../../components/BillCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ThankModal from '../../components/modal/ThankModal';
import { HomeTabParamList } from '../../routes/HomeNavigator';

const PaymentScreen = ({ route }: PaymentScreenProps) => {
  const cartNavigation =
    useNavigation<NativeStackNavigationProp<CartNavigationParams>>();
  const paymentNavigation =
    useNavigation<NativeStackNavigationProp<PaymentMethodNavigatorParams>>();
  const appNavigation = useNavigation<NativeStackNavigationProp<HomeTabParamList>>()
  const [showThankDialog, setShowThankDialog] = useState<boolean>(false)
  const dispatch = useDispatch<AppDispatch>();
  const defaultpaymentMethod = route.params.paymentMethod

  // bill info
  const [address, setAddress] = useState<string>('');
  const [delivery, setDelivery] = useState<delivery>(deliverys[0]);
  const [total, setTotal] = useState(0);

  const itemOnCart = useSelector((state: RootState) => state.product.products);
  useEffect(() => {
    let totalMount = getTotalAmount(itemOnCart) + delivery.price;
    setTotal(totalMount);
  }, [delivery]);
  const renderDeliveryItem: ListRenderItem<delivery> = ({ item }) => {
    return (
      <DeliveryCard
        setDelivery={() => {
          setDelivery(item);
        }}
        name={item.name}
        isSelected={item.name === delivery.name}
        time={item.time}
        img={item.img}
      />
    );
  };
  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TabBar
          showBackButton
          onBackPress={() => {
            cartNavigation.navigate('CartScreen');
          }}
          style={{ marginBottom: 13 }}
          label="Payment"
        />
        <SelectLocationCard
          address={address}
          onGetLocationComplete={(address: Address) => {
            setAddress(AddressToString(address));
          }}
        />
        <ExpectedTimeCard />
        <ShowItemCard
          onPress={() => {
            ShowItemAlert(itemOnCart);
          }}
        />
        <PaymentMethodCard
          cashOnDelivery={defaultpaymentMethod === 'Cash on delivery'}
          onPress={() => {
            paymentNavigation.navigate('SelectPaymentMethodScreen');
          }}
          cardNumber={defaultpaymentMethod != 'Cash on delivery' ? defaultpaymentMethod.number : ''
          }
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          renderItem={renderDeliveryItem}
          horizontal
          data={deliverys}
        />
        <BillCard priceDelivery={delivery.price} priceSubtotal={getTotalAmount(itemOnCart)} />
      </ScrollView>
      <Button
        onPress={() => {
          dispatch(emptyCart());
          setShowThankDialog(true)
          setTimeout(() => {
            appNavigation.reset({
              index: 1,
              routes: [{ name: 'Shop' }],
            })
          }, 2500)
        }}
        style={{ marginTop: 10 }}
        label={`Check out ${formatVNCurrencyTypeNumber(total + (total * 0.05))}`}
      />
      <ThankModal show={showThankDialog} />
    </ScreenContainer>
  );
};
export default PaymentScreen;
