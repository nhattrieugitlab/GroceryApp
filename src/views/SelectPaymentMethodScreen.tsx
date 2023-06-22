import {View, ScrollView} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import TabBar from '../components/Tabbar';
import Button from '../components/Button';
import CreditCard from '../components/CreditCard';
import {useState, useCallback} from 'react';
import CheckBox from '../components/CheckBox';
import FloatingActionButton from '../components/FloatingActionButton';
import {AppIcons} from '../constant/IconPath';
import AddCrediCardModal from '../components/modal/AddCreditCardModal';
export type CrediCard = {
  name: string;
  cvv: string;
  number: string;
  exDate: string;
  type: string | undefined;
};
const SelectPaymentMethodScreen = () => {
  const PaymentMethods: CrediCard[] = [
    {
      cvv: '123',
      name: 'Hoang Van Thanh 1',
      exDate: '20/8',
      number: '625094100652859',
      type: undefined,
    },
    {
      cvv: '123',
      name: 'Hoang Van Thanh 2',
      exDate: '12/2',
      number: '625094100652822',
      type: 'masterCard',
    },
    {
      cvv: '123',
      name: 'Hoang Van Thanh 3',
      exDate: '19/5',
      number: '625094100652899',
      type: 'masterCard',
    },
  ];
  const [creditCards, setCrediCards] = useState(PaymentMethods);
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [defaulPaymentMethod, setDefaultPaymentMethod] =
    useState<string>('625094100652859');
  const AddCard = useCallback((newCredtiCard: any) => {
    setCrediCards(prevCrediCard => {
      return [...prevCrediCard, newCredtiCard];
    });
  }, []);
  console.log(isShowModal);
  return (
    <ScreenContainer>
      <TabBar label="Payment method" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {creditCards.map(item => {
          console.log(item.number);
          return (
            <View key={item.number}>
              <CreditCard
                exprityDate={item.exDate}
                onSelectCard={() => {
                  setDefaultPaymentMethod(item.number);
                }}
                cardNumber={item.number}
                name={item.name}
                type={item.type}
              />
              <CheckBox
                checked={defaulPaymentMethod === item.number}
                onSelected={() => {
                  setDefaultPaymentMethod(item.number);
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
      <Button style={{marginTop: 30}} onPress={() => {}} label="Done" />
      <AddCrediCardModal
        setShowModal={setShowModal}
        onAddCard={AddCard}
        isShowModal={isShowModal}
      />
    </ScreenContainer>
  );
};
export default SelectPaymentMethodScreen;
