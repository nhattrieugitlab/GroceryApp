import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import TabBar from '../components/Tabbar';
import {useCallback, useState, useEffect} from 'react';
import {
  validateCreditCardNumber,
  validateCvvCode,
} from '../utilities/ValidateCrediCard';
import FormTextInput from '../components/FormTextInput';
import Button from '../components/Button';
import MonthPicker from 'react-native-month-year-picker';
const Test = () => {
  const [nameOnCard, setNameOnCard] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [exprireDate, setExprireDate] = useState<Date>(new Date());
  const [cvv, setCvv] = useState<string>('');

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [isCardNumberErr, setCardNumberErr] = useState<boolean>(false);
  const [isCvvErr, setCvvErr] = useState<boolean>(false);

  const [isValidateCard, setValidateCard] = useState<boolean>(false);
  useEffect(() => {
    if (!isCvvErr && !isCardNumberErr
      ) {
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
    <View style={styles.container}>
      <TabBar label="Add new card" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, width: '100%', marginBottom: 10}}>
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
        style={{marginTop: 10}}
        onPress={() => {}}
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
});
export default Test;
