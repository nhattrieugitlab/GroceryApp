import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import TabBar from '../components/Tabbar';
import Button from '../components/Button';
import CreditCard from '../components/CreditCard';
import { useState } from 'react';
import CheckBox from '../components/CheckBox';
import FloatingActionButton from '../components/FloatingActionButton';
import { AppIcons } from '../constant/IconPath';
import AddCrediCardModal from '../components/modal/AddCreditCardModal';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PaymentMethodNavigatorParams } from '../routes/PaymentmethodNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { updateDefaultPaymentMethod } from '../redux/defaultPaymentMethodSlice';
import { CreditCardType } from '../datatypes/CreditCard';
export type CrediCard = {
  name: string;
  cvv: string;
  number: string;
  exDate: string;
  type: string | undefined;
};
const SelectPaymentMethodScreen = () => {
  //set showmodel
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const defaulPaymentMethod = useSelector((state: RootState) => state.defaultPaymentMethod.paymentMethod)
  const dispatch = useDispatch<AppDispatch>()
  const userCreditCards = useSelector((state: RootState) => state.crediCard.creditCards);
  const completeSelect = async (paymentMethod: CreditCardType | 'Cash on delivery') => {
    paymentNavigation.navigate('PaymentScreen', { paymentMethod });
  };
  const changeDefaultPaymentMethod = (newDefaulPaymentMethod: 'Cash on delivery' | CreditCardType) => {
    dispatch(updateDefaultPaymentMethod(newDefaulPaymentMethod))
  }
  const isDefaultMethod = (item: CreditCardType) => {
    return defaulPaymentMethod != 'Cash on delivery' ? defaulPaymentMethod.number === item.number : false
  }
  const paymentNavigation =
    useNavigation<NativeStackNavigationProp<PaymentMethodNavigatorParams>>();
  return (
    <ScreenContainer>
      <TabBar showBackButton onBackPress={() => { }} label="Payment method" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => {
            completeSelect('Cash on delivery');
          }}
          style={styles.deliveryContainer}>
          <Image source={AppIcons.IconDelivery} />
          <Text style={styles.deliveryText}>Cash on delivery</Text>
        </TouchableOpacity>
        <CheckBox
          checked={defaulPaymentMethod === 'Cash on delivery'}
          onSelected={() => {
            changeDefaultPaymentMethod('Cash on delivery')
          }}
          label="Use as default payment method"
        />
        {userCreditCards.map(item => {
          return (
            <View key={item.number}>
              <CreditCard
                exprityDate={item.exDate}
                onSelectCard={() => {
                  completeSelect(item);
                }}
                cardNumber={item.number}
                name={item.name}
              />
              <CheckBox
                checked={isDefaultMethod(item)}
                onSelected={() => {
                  changeDefaultPaymentMethod(item)
                }}
                label="Use as default payment method"
              />
            </View>
          );
        })}
      </ScrollView>
      <FloatingActionButton
        onPress={() => {
          setShowModal(true);
        }}
        icon={AppIcons.IconAdd}
      />
      <Button
        style={{ marginTop: 30 }}
        onPress={() => {
        }}
        label="Done"
      />
      <AddCrediCardModal
        setShowModal={setShowModal}
        isShowModal={isShowModal}
      />
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  deliveryText: {
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#FF5E00',
  },
  deliveryContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
    height: 48,
    borderRadius: 8,
    flexDirection: 'row',
  },
});
export default SelectPaymentMethodScreen;
