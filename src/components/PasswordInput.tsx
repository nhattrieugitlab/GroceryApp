import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AppIcons} from '../constant/IconPath';
import {logInTextInputStyles} from './style/TextInputStyle';

type PasswordInputProp = {
  isShowPassword: boolean;
};
function PasswordInput({isShowPassword}: PasswordInputProp): JSX.Element {
  return (
    <View style={logInTextInputStyles.container}>
      <Image
        resizeMode="contain"
        style={[styles.lockIcon]}
        source={AppIcons.IconKey}
      />
      <TextInput
        secureTextEntry={!isShowPassword}
        style={[logInTextInputStyles.textInput, {paddingHorizontal: 45}]}
        placeholder={'Enter your password'}
        placeholderTextColor={'#AC8E71'}
      />
      <TouchableOpacity style={styles.showPassIconConatainer}>
        <Image
          style={styles.showPassIcon}
          resizeMode="contain"
          source={AppIcons.IconShowPassword}
        />
      </TouchableOpacity>
    </View>
  );
}
export default PasswordInput;

const styles = StyleSheet.create({
  showPassIconConatainer: {
    alignSelf: 'center',
    position: 'absolute',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    top: 9,
    right: 13,
  },
  showPassIcon: {
    tintColor: '#FF5E00',
  },
  lockIcon: {
    alignSelf: 'center',
    position: 'absolute',
    width: 13,
    height: 17,
    top: 15.5,
    left: 15,
  },
});
