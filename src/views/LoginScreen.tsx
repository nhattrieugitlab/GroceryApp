import { Text, Image, ScrollView, StyleSheet, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import TabBar from '../components/Tabbar';
import { useNavigation } from '@react-navigation/native';
import { AppStackParams } from '../routes/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PhoneNumberInput from '../components/PhoneNumberInput';
import PasswordInput from '../components/PasswordInput';
import { validatePhoneNumber } from '../utilities/ValidatePhoneNumber';
import { validatePassword } from '../utilities/ValidatePass';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { setShowLoading } from '../redux/isLoadingSlice';
import { logIn } from '../service/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthStackParamList } from '../routes/AuthNavigator';
import AnimatedLottieView from 'lottie-react-native';
import { AppAnimation, AppIcons } from '../constant/IconPath';
import GoogleLoginButton from '../components/GoogleLoginButton';
function LoginScreen(): JSX.Element {
  const appNavigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();
  const authNavigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>()
  const [isShowPassword, setShowPassWord] = useState<boolean>(false);
  const [phoneNumber, setphoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isHasPhoneNumberErr, setPhoneNumberErr] = useState<boolean>(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isEmptyPasswordErr, setIsEmptyPasswordErr] = useState<boolean>(false);
  const getUserNameDefault = async () => {
    const userName = await AsyncStorage.getItem('userName')
    setphoneNumber(userName || '')
  }

  useEffect(() => {
    getUserNameDefault()
  }, [])

  const valiateUserInfo = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneNumberErr(true)
      return false
    }
    if (!validatePassword(password)) {
      setIsEmptyPasswordErr(true)
      return false
    }
    return true
  }
  const onLoginButtonClick = async () => {
    if (valiateUserInfo()) {
      dispatch(setShowLoading({ isShowLoading: true }))
      const loginResponse: boolean = await logIn(phoneNumber, password)
      if (loginResponse) {
        appNavigation.reset({
          index: 0,
          routes: [{ name: 'HomeNavigator' }],
        });
      }
      dispatch(setShowLoading({ isShowLoading: false }))
    }
  }
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);


  const dispatch = useDispatch<AppDispatch>();
  return (
    <ScreenContainer>
      <TabBar showBackButton onBackPress={() => { }} label="Sign In" />
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        {
          !isKeyboardOpen ?
            <Image
              style={[styles.image,]}
              source={require('../assets/images/PhoneKey.png')}
            /> : <AnimatedLottieView autoPlay style={{ width: 200, height: 200, alignSelf: 'center' }} loop source={AppAnimation.LoginUser} />
        }
        <Text style={styles.textSend}>
          Enter your phone number and password to access your account
        </Text>
        <PhoneNumberInput
          showCountryPicker
          onChanePhoneNumber={(phoneNumber: string) => {
            setPhoneNumberErr(false)
            setphoneNumber(phoneNumber);
          }}
          err={isHasPhoneNumberErr}
          value={phoneNumber} />
        <PasswordInput
          err={isEmptyPasswordErr}
          value={password}
          setShowPassword={setShowPassWord}
          isShowPassword={isShowPassword}
          onChangeText={(password: string) => {
            setIsEmptyPasswordErr(false)
            setPassword(password)
          }} />
        <Text style={styles.textForgot}>Forget Password</Text>
        <Button
          onPress={onLoginButtonClick}
          label="Sign in"
        />
        <TouchableOpacity onPress={() => {
          authNavigation.navigate('EnterPhoneNumberScreen')
        }}>
        </TouchableOpacity>
        <GoogleLoginButton />
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
    resizeMode: 'contain',
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
