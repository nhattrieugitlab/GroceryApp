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
import Button from '../components/Button';
import PasswordInput from '../components/PasswordInput';
import CountryPicker2 from '../components/CountryPicker2';
import {AppIcons} from '../constant/IconPath';

function LoginScreen(): JSX.Element {
  const [isShowPassword, setShowPassWord] = useState<boolean>(false);
  const [isShowPasswordComfirm, setShowPassWordComfirm] =
    useState<boolean>(false);
  return (
    <ScreenContainer>
      <ScrollView>
        <Image
          style={{width: 8.49, height: 14}}
          source={require('../assets/icon/Back.png')}
        />
        <Text style={styles.textSignUp}>Sign in</Text>
        <Image
          style={styles.image}
          source={require('../assets/images/PhoneKey.png')}
        />
        <Text style={styles.textSend}>
          Enter your phone number and password to access your account
        </Text>
        <View style={styles.textinputContainer}>
          <View
            style={[
              styles.icon,
              {
                width: 25,
                height: 20,
                top: 13.5,
                left: 13,
              },
            ]}>
            <CountryPicker2 />
          </View>
          <TextInput
            style={styles.textInputPhone}
            placeholderTextColor={'#AC8E71'}
            placeholder="Phone Number"
          />
        </View>
        <View style={styles.textinputContainer}>
          <TextInput
            style={[styles.textInputPass]}
            placeholder="Password"
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
        <Text style={styles.textForgot}>Forgote Password</Text>
        <Button label="Sign in" />
        <Text style={styles.textAccount}> Don't have an account? Sign Up</Text>
      </ScrollView>
    </ScreenContainer>
  );
}
export default LoginScreen;
const styles = StyleSheet.create({
  textSignUp: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF5E00',
    letterSpacing: 0.4,
    lineHeight: 40,
    textAlign: 'center',
    justifyContent: 'center',
  },
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
    fontSize: 14,
    fontWeight: '400',
    color: '#FF5E00',
    lineHeight: 17,
    alignSelf: 'flex-end',
    marginTop: 2,
  },
  textInputPhone: {
    height: '100%',
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 16,
    paddingLeft: 70,
    lineHeight: 19,
    color: '#AC8E71',
  },
  textInputPass: {
    height: '100%',
    paddingLeft: 22,
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#AC8E71',
  },

  textinputContainer: {
    height: 48,
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    marginTop: 13,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  icon: {
    position: 'absolute',
    alignSelf: 'center',
  },
  image: {
    width: 348,
    height: 348,
  },
  conutypick: {
    position: 'absolute',
    alignSelf: 'center',
  },
  textEnter: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#7F4E1D',
    fontFamily: 'Klarna Text',
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
