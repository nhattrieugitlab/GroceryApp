import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AppIcons} from '../constant/IconPath';

type PasswordInputProp = {
  label?: string;
  isShowPassword: boolean;
};
function PasswordInput({
  label,
  isShowPassword,
}: PasswordInputProp): JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={[styles.icon, {width: 13, height: 17, left: 13, top: 17.5}]}
        source={AppIcons.IconKey}
      />
      <TextInput
        style={[styles.textInput]}
        placeholder={label}
        placeholderTextColor={'#AC8E71'}></TextInput>
      <TouchableOpacity>
        <Image
          style={[
            styles.icon,
            {
              width: 25,
              height: 20,
              tintColor: '#FF5E00',
              top: 13.5,
              right: 13,
            },
          ]}
          resizeMode="contain"
          source={AppIcons.IconShowPassword}
        />
      </TouchableOpacity>
    </View>
  );
}
export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    marginTop: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  icon: {
    alignSelf: 'center',
    position: 'absolute',
  },
  textInput: {
    height: '100%',
    paddingLeft: 50,
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#AC8E71',
  },
});
