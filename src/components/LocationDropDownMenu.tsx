import {Dropdown} from 'react-native-element-dropdown';
import {StyleSheet, View, Text, ViewStyle} from 'react-native';
import {District, Province, Commune} from '../datatypes/LocationDataTypes';
import React from 'react';
const renderItemDropdownMenu = ({name}: District | Province | Commune) => (
  <View
    style={{
      padding: 10,
      width: '100%',
      height: 50,
    }}>
    <Text style={{color: 'black', fontWeight: '400'}}>{name} </Text>
  </View>
);
type LocationDropDownMenuProps = {
  style?: ViewStyle;
  onChange: Function;
  type: 'District' | 'Province' | 'Commnune';
  placeholder: string;
  data: District[] | Province[] | Commune[];
  label: string;
};
const LocationDropDownMenu: React.FC<LocationDropDownMenuProps> = ({
  type,
  label,
  data,
  onChange,
  style,
  placeholder,
}) => {
  let valueField: any;
  // chac chan 1 trong so 3 kieu nay
  if (type == 'Commnune') {
    valueField = 'idCommnune';
  } else if (type == 'Province') {
    valueField = 'idProvince';
  } else {
    valueField = 'idDistrict';
  }
  return (
    <View style={style}>
      <Text style={[styles.labelDropDownMenu, styles.dropdownMenuSelectedText]}>
        {label}
      </Text>
      <Dropdown
        dropdownPosition="bottom"
        placeholder={placeholder}
        keyboardAvoiding={true}
        iconColor="#804F1E"
        searchPlaceholder={`search your ${type.toLowerCase()} ...`}
        style={styles.dropdownMenuContainer}
        selectedTextStyle={styles.dropdownMenuSelectedText}
        search={false}
        valueField={valueField}
        labelField="name"
        minHeight={200}
        onChange={item => {
          onChange(item);
        }}
        renderItem={renderItemDropdownMenu}
        data={data}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  labelDropDownMenu: {
    fontSize: 15,
    padding: 10,
  },
  detailAddressTextInput: {
    fontSize: 17,
    color: 'black',
    fontWeight: '400',
    paddingHorizontal: 10,
    height: 60,
    width: '100%',
    borderColor: '#FF5E00',
    borderRadius: 12,
    borderWidth: 2,
  },
  dropdownMenuSelectedText: {fontWeight: '700', color: '#804F1E'},
  dropdownMenuContainer: {
    paddingHorizontal: 10,
    borderColor: '#FF5E00',
    borderWidth: 2,
    height: 50,
    padding: 5,
    borderRadius: 12,
  },
});
export default LocationDropDownMenu;
