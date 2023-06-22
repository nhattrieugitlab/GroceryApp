import {View, ScrollView} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import TabBar from '../components/Tabbar';
import Button from '../components/Button';
import CreditCard from '../components/CreditCard';
import {useState, useEffect} from 'react';
import CheckBox from '../components/CheckBox';
import FloatingActionButton from '../components/FloatingActionButton';
import {AppIcons} from '../constant/IconPath';
const PaymentMethods = [
  {
    name: 'Hoang Van Thanh 1',
    exDate: '20/8',
    cardNumber: '625094100652859',
  },
  {
    name: 'Hoang Van Thanh 2',
    exDate: '12/2',
    cardNumber: '625094100652822',
    type: 'masterCard',
  },
  {
    name: 'Hoang Van Thanh 3',
    exDate: '19/5',
    cardNumber: '625094100652899',
    type: 'masterCard',
  },
];

const SelectPaymentMethodScreen = () => {
  const [defaulPaymentMethod, setDefaultPaymentMethod] =
    useState<string>('625094100652859');
  console.log('re-render man hinh chon');
  return (
    <ScreenContainer>
      <TabBar label="Payment method" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {PaymentMethods.map(item => {
          console.log(
            item.cardNumber + '',
            defaulPaymentMethod == item.cardNumber,
          );
          return (
            <View key={item.cardNumber}>
              <CreditCard
                exprityDate={item.exDate}
                onSelectCard={() => {
                  setDefaultPaymentMethod(item.cardNumber);
                }}
                cardNumber={item.cardNumber}
                name={item.name}
                type={item.type}
              />
              <CheckBox
                checked={defaulPaymentMethod === item.cardNumber}
                onSelected={() => {
                  setDefaultPaymentMethod(item.cardNumber);
                }}
                label="Use as default payment method"
              />
            </View>
          );
        })}
      </ScrollView>
      <FloatingActionButton
        style={{
          borderRadius: 24,
          backgroundColor: '#FF5E00',
          position: 'absolute',
          bottom: 100,
          right: 30,
        }}
        icon={AppIcons.IconAdd}
      />
      <Button style={{marginTop: 30}} onPress={() => {}} label="Done" />
    </ScreenContainer>
  );
};
export default SelectPaymentMethodScreen;
