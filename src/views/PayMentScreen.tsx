import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenContainer from '../components/ScreenContainer';
import {StyleSheet, Text, View} from 'react-native';
import CountryPicker from 'rn-country-picker';
const PaymentScreen = () => {
  return (
    <ScreenContainer>
      <View>
        <Text>sadasd</Text>
        <CountryPicker
          disable={false}
          animationType={'slide'}
          language="en"
          pickerTitle={'Country Picker'}
          searchBarPlaceHolder={'Search......'}
          hideCountryFlag={false}
          hideCountryCode={true}
          countryCode={'84'}
        />
      </View>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({});
export default PaymentScreen;
