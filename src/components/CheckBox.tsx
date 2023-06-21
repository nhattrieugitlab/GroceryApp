import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
const CheckBox: React.FC<{
  checked: boolean;
  label: string;
  onSelected: Function;
}> = ({label, onSelected, checked}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onSelected();
      }}
      style={{flexDirection: 'row'}}>
      <Image
        source={
          !checked
            ? require('../assets/icon/cb_unchecked.png')
            : require('../assets/icon/cb_checked.png')
        }
      />
      <Text style={styles.opptionText}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  opptionText: {
    color: '#222222',
    fontSize: 14,
    lineHeight: 21,
  },
});
export default CheckBox;
