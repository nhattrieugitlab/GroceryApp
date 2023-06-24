import {Text, Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import TabBar from '../components/Tabbar';
import {useNavigation} from '@react-navigation/native';
import {AppStackParams} from '../routes/AppNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PhoneNumberInput from '../components/PhoneNumberInput';
import PasswordInput from '../components/PasswordInput';
import {validatePhoneNumber} from '../utilities/ValidatePhoneNumber';
import {validatePass} from '../utilities/ValidatePass';
function LoginScreen(): JSX.Element {
  const appNavigation =
    useNavigation<NativeStackNavigationProp<AppStackParams>>();
  const [isShowPassword, setShowPassWord] = useState<boolean>(false);
  const [phoneNumber, setphoneNumber] = useState<string>('');
  const [isCardNumberErr, setCardNumberErr] = useState<boolean>(false);
  return (
    <ScreenContainer>
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <TabBar showBackButton onBackPress={() => {}} label="Sign In" />
        <Image
          style={styles.image}
          source={require('../assets/images/PhoneKey.png')}
        />
        <Text style={styles.textSend}>
          Enter your phone number and password to access your account
        </Text>
        <PhoneNumberInput
          showCountryPicker
          errMessage="Phone number is invalid"
          onChanePhoneNumber={(phoneNumber: string) => {
            setphoneNumber(phoneNumber);
            let isHasErr = !validatePhoneNumber(phoneNumber, setphoneNumber);
            setCardNumberErr(isHasErr);
            console.log('isHasErr', isCardNumberErr);
          }}
          err={isCardNumberErr}
          value={phoneNumber}
        />
        <PasswordInput
          errMessage="Password is invalid"
          err={isShowPassword}
          setShowPassword={setShowPassWord}
          isShowPassword={isShowPassword}
          onChangeText={(pass: string) => {
            let isHasErr = !validatePass(pass, setShowPassWord);
            setShowPassWord(isHasErr);
          }}
        />
        <Text style={styles.textForgot}>Forget Password</Text>
        <Button
          onPress={() => {
            appNavigation.navigate('HomeNavigator');
          }}
          label="Sign in"
        />
        <Text style={styles.textAccount}> Don't have an account? Sign Up</Text>
      </ScrollView>
    </ScreenContainer>
  );
}
export default LoginScreen;
const styles = StyleSheet.create({
  textAccount: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7F4E1D',
    lineHeight: 19,
    textAlign: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  textForgot: {
    marginVertical: 20,
    fontSize: 14,
    fontWeight: '400',
    color: '#FF5E00',
    lineHeight: 17,
    alignSelf: 'flex-end',
  },
  image: {
    width: 348,
    height: 348,
  },
  textSend: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 21.6,
    color: '#7F4E1D',
    fontFamily: 'Klarna Text',
    width: 300,
    height: 52,
  },
});
