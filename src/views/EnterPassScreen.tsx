import {Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import PasswordInput from '../components/PasswordInput';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';

function EnterPasswordScreen(): JSX.Element {
  const [isShowPassword, setShowPassWord] = useState<boolean>(false);
  const [isShowPasswordComfirm, setShowPassWordComfirm] =
    useState<boolean>(false);
  return (
    <ScreenContainer>
      <ScrollView style={styles.body}>
        <Image source={require('../assets/images/Arrow.png')} />
        <Text style={styles.textSignUp}>Sign Up</Text>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../assets/images/phonepass.png')}
        />
        <Text style={styles.textEnterPass}>Enter the password</Text>
        <Text style={styles.textContent}>
          For the security & safety please choose a password
        </Text>
        <PasswordInput
          setShowPassword={setShowPassWord}
          isShowPassword={isShowPassword}
          placeHolder={'Password'}
        />
        <PasswordInput
          setShowPassword={setShowPassWordComfirm}
          isShowPassword={isShowPasswordComfirm}
          placeHolder={'Confirm Password'}
        />
        <Button onPress={() => {}} label="Next" />
        <Text style={styles.textlabel3}> Already have an account?Login</Text>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 280,
    alignSelf: 'center',
  },
  textSignUp: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF5E00',
    letterSpacing: 0.4,
    lineHeight: 40,
    textAlign: 'center',
    marginRight: 20,
    justifyContent: 'center',
  },
  textEnterPass: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#7F4E1D',
  },
  textContent: {
    width: 325,
    height: 53,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: '#7F4E1D',
    marginTop: 10,
  },
  body: {
    padding: 16,
    width: '100%',
  },
  buttoncontainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 343,
    borderRadius: 30,
    backgroundColor: '#FF5E00',
    marginTop: 17,
  },
  textlabel3: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: '#7F4E1D',
    marginTop: 10,
    textAlign: 'center',
  },
});
export default EnterPasswordScreen;
