import CountryPicker from 'rn-country-picker';
const CountryPicker2 = () => {
  return (
    <CountryPicker
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
