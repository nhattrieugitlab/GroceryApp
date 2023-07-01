import CountryPicker from 'rn-country-picker';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
const CountryPicker2: React.FC<{ style: ViewStyle }> = ({ style }) => {
  return (
    <CountryPicker
      containerStyle={style}
      disable={false}
      animationType={'slide'}
      language="en"
      pickerTitle={'Country Picker'}
      searchBarPlaceHolder={'Search yourcountry'}
      hideCountryFlag={false}
      hideCountryCode={true}
      countryCode={'84'}
    />
  );
};
export default CountryPicker2;
