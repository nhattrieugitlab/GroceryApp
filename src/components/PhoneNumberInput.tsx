import { View, TextInput, Text } from 'react-native';
import CountryPicker2 from './CountryPicker2';
import { logInTextInputStyles } from './style/TextInputStyle';
const PhoneNumberInput: React.FC<{
  showCountryPicker: boolean;
  err?: boolean;
  errMessage?: string;
  onChanePhoneNumber?: Function;
  value?: string;
}> = ({ showCountryPicker, err, onChanePhoneNumber, value }) => {
  return (
    <>
      <View style={logInTextInputStyles.container}>
        <TextInput
          maxLength={9}
          keyboardType="number-pad"
          value={value}
          style={[
            err && { borderBottomColor: 'red', borderBottomWidth: 1 },
            logInTextInputStyles.textInput,
            { paddingLeft: 70 }
          ]}
          placeholderTextColor={'#AC8E71'}
          placeholder="Phone Number"
          onChangeText={(text: string) => {
            onChanePhoneNumber && onChanePhoneNumber(text);
          }}
        />
        {showCountryPicker && (
          <CountryPicker2
            style={{ position: 'absolute', height: 30, top: 9, left: 10 }}
          />
        )}
      </View>
      {err && (
        <Text style={logInTextInputStyles.erroText}>
          Vui lòng nhập số điện thoại hợp lệ !
        </Text>
      )}
    </>
  );
};
export default PhoneNumberInput;
