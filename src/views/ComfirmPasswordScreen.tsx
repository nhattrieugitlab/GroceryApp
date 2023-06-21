import {
  Text,
  ImageRequireSource,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ScreenContainer from '../components/ScreenContainer';
import PasswordInput from '../components/PasswordInput';
import Button from '../components/Button';
import CountryPicker2 from '../components/CountryPicker2';

function ComfirmPasswordScreen(): JSX.Element {
  const [isShowPassword, setShowPassWord] = useState<boolean>(false);
  const [isShowPasswordComfirm, setShowPassWordComfirm] =
    useState<boolean>(false);
  return (
    <ScreenContainer>
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <Image source={require('../assets/images/Arrow.png')} />
          <Text style={styles.textSignUp}>Sign Up</Text>
          <Image
            style={styles.image}
            source={require('../assets/images/phone.png')}
          />
          <View style={styles.textinputContainer}>
            <TextInput
              style={styles.textInput}
              placeholderTextColor={'#AC8E71'}
              placeholder="Name SurName"></TextInput>
          </View>

          <View style={styles.textinputContainer}>
            <View style={{paddingLeft: 12, paddingTop: 11}}>
              <CountryPicker2 />
            </View>

            <TextInput
              style={styles.textInputPhone}
              placeholderTextColor={'#AC8E71'}
              placeholder="Phone Number"
            />
          </View>

          <Text style={styles.textContent}>
            We need to verify you. We will send you a one time verification
            code.{' '}
          </Text>
          <Button label="Next" />
          <Text style={styles.textlabel3}> Already have an account? Login</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </ScreenContainer>
  );
}

export default ComfirmPasswordScreen;
const styles = StyleSheet.create({
  image: {
    width: 348,
    height: 348,
  },
  textinputContainer: {
    height: 48,
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    marginTop: 16,

    flexDirection: 'row',
    width: '100%',
  },
  textSignUp: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF5E00',
    letterSpacing: 0.4,
    lineHeight: 40,
    textAlign: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: '100%',
    paddingLeft: 27,
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#AC8E71',
  },
  textInputPhone: {
    height: '100%',
    paddingLeft: 22,
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#AC8E71',
  },
  textInputPassWord: {
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    padding: 15,
    height: 50,
    marginTop: 16,
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

  buttoncontainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 343,
    borderRadius: 30,
    backgroundColor: '#FF5E00',
    marginTop: 50,
  },
  buttonLabel: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 22,
    color: 'white',
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
