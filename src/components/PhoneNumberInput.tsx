import { View, TextInput, Text } from 'react-native';
import CountryPicker2 from './CountryPicker2';
import { logInTextInputStyles } from './style/TextInputStyle';
const PhoneNumberInput: React.FC<{
  showCountryPicker: boolean;
  err?: boolean;
  errMessage?: string;
  onChanePhoneNumber?: Function;
  value?: string;
}> = ({ showCountryPicker, err, errMessage, onChanePhoneNumber, value }) => {
  console.log('errMessage', errMessage);
  return (
    <View style={logInTextInputStyles.container}>
      <TextInput
        keyboardType="number-pad"
        value={value}
        style={[
          logInTextInputStyles.textInput,
          err && { borderBottomColor: 'red', borderBottomWidth: 1 },
          showCountryPicker && { paddingLeft: 70 },
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
      {err && (
        <View style={{ backgroundColor: 'blue', height: 50, width: 300 }}>
          <Text>
            {errMessage}
          </Text>
        </View>
      )}
    </View>
  );
};
export default PhoneNumberInput;
