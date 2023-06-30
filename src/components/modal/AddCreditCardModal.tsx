import {
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import TabBar from '../Tabbar';
import { useCallback, useState, useEffect } from 'react';
import {
  validateCreditCardNumber,
  validateCvvCode,
} from '../../utilities/ValidateCrediCard';
import FormTextInput from '../FormTextInput';
import Button from '../Button';
import MonthPicker from 'react-native-month-year-picker';
import { CrediCard } from '../../views/SelectPaymentMethodScreen';
type AddCrediCardModalProps = {
  isShowModal: boolean;
  setShowModal: Function;
};
const AddCrediCardModal: React.FC<AddCrediCardModalProps> = ({
  isShowModal,
  setShowModal,
}) => {
  const [nameOnCard, setNameOnCard] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [exprireDate, setExprireDate] = useState<Date>(new Date());
  const [cvv, setCvv] = useState<string>('');

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [isCardNumberErr, setCardNumberErr] = useState<boolean>(false);
  const [isCvvErr, setCvvErr] = useState<boolean>(false);

  const [isValidateCard, setValidateCard] = useState<boolean>(false);
  useEffect(() => {
    if (!isCvvErr && !isCardNumberErr && cardNumber.length > 0) {
      setValidateCard(true);
    } else {
      setValidateCard(false);
    }
  }, [cvv, cardNumber]);
  const showPicker = useCallback(
    (value: boolean) => setShowDatePicker(value),
    [],
  );
  const onValueChange = useCallback(
    (event: string, newDate: Date) => {
      const selectedDate = newDate || exprireDate;
      setShowDatePicker(false);
      setExprireDate(selectedDate);
    },
    [showDatePicker, exprireDate],
  );
  return (
    <Modal
      onDismiss={() => {
        setShowModal(false);
      }}
      visible={isShowModal}
      animationType="slide">
      <TabBar
        style={{ padding: 24 }}
        onBackPress={() => {
          setShowModal(false);
        }}
        showBackButton
        label="Add new card"
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <FormTextInput
          onChangeText={(name: string) => {
            setNameOnCard(name);
          }}
          value={nameOnCard}
          err={false}
          label="Card name"
          placeHolder="Name on Card"
        />
        <FormTextInput
          maxLength={19}
          value={cardNumber}
          type="number-pad"
          onChangeText={(cardNumber: string) => {
            setCardNumber(cardNumber);
            let isHasErr = !validateCreditCardNumber(cardNumber, setCardNumber);
            setCardNumberErr(isHasErr);
          }}
          err={isCardNumberErr}
          errMessage="Please enter a valid card number *"
          label="Card number"
          placeHolder="XXXX XXXX XXXX XXXX"
        />
        <TouchableOpacity
          onPress={() => {
            showPicker(true);
          }}>
          <FormTextInput
            value={`${exprireDate.getMonth() + 1}/${exprireDate
              .getFullYear()
              .toString()
              .substring(2, 5)}`}
            onChangeText={(cvvCode: string) => {
              let hasErr = !validateCvvCode(cvvCode, setCvv);
              setCvvErr(hasErr);
            }}
            disable={true}
            err={false}
            label="Expiry Date"
            placeHolder="MM/YY"
          />
        </TouchableOpacity>
        <FormTextInput
          maxLength={3}
          value={cvv}
          onChangeText={(cvvCode: string) => {
            let hasErr = !validateCvvCode(cvvCode, setCvv);
            setCvvErr(hasErr);
          }}
          type={'number-pad'}
          err={isCvvErr}
          errMessage="Please enter a valid CVV code *"
          label="CVV"
          placeHolder="***"
        />
      </ScrollView>
      <Button
        disable={!isValidateCard}
        style={{ marginBottom: 20, width: '95%', alignSelf: 'center' }}
        onPress={() => {
          let newCard: CrediCard = {
            name: nameOnCard,
            exDate: exprireDate.toDateString(),
            cvv: cvv,
            type: undefined,
            number: cardNumber.replace(/\s/g, ''),
          };
          setShowModal(false);
        }}
        label="Add Credit Card"
      />
      {showDatePicker && (
        <MonthPicker
          onChange={onValueChange}
          value={exprireDate}
          minimumDate={new Date()}
          maximumDate={new Date(2025, 5)}
          locale="en"
        />
      )}
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    marginBottom: 10,
  },
});
export default AddCrediCardModal;
