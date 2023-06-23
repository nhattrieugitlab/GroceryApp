import {View, TextInput} from 'react-native';
import CountryPicker2 from './CountryPicker2';
import {logInTextInputStyles} from './style/TextInputStyle';
const PhoneNumberInput: React.FC<{showCountryPicker: boolean}> = ({
  showCountryPicker,
}) => {
  return (
    <View style={logInTextInputStyles.container}>
      <TextInput
        keyboardType="number-pad"
        style={[
          logInTextInputStyles.textInput,
          showCountryPicker && {paddingLeft: 70},
        ]}
        placeholderTextColor={'#AC8E71'}
        placeholder="Phone Number"
      />
      {showCountryPicker && (
        <CountryPicker2
          style={{position: 'absolute', height: 30, top: 9, left: 10}}
        />
      )}
    </View>
  );
};
export default PhoneNumberInput;
