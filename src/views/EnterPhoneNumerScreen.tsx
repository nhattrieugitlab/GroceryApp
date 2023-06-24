import {
  Text,
  Image,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {logInTextInputStyles} from '../components/style/TextInputStyle';
import React, {useState} from 'react';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import TabBar from '../components/Tabbar';
import PhoneNumberInput from '../components/PhoneNumberInput';
import SurNameInput from '../components/SurNameInput';
import {AppImage} from '../constant/IconPath';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../routes/AuthNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {validatePhoneNumber} from '../utilities/ValidatePhoneNumber';
import {validatePass} from '../utilities/ValidatePass';
function EnterPhoneNumberScreen(): JSX.Element {
  // const appNavigation =
  //   useNavigation<NativeStackNavigationProp<AppStackParams>>();
  const [isShowPassword, setShowPassWord] = useState<boolean>(false);
  const [phoneNumber, setphoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPhoneNumber, setPhoneNumber] = useState<boolean>(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  return (
    <ScreenContainer>
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <TabBar showBackButton onBackPress={() => {}} label="Sign Up" />
        <Image style={styles.image} source={AppImage.EnterPhoneNumber} />

        <SurNameInput
          onChanePass={(pass: string) => {
            setPassword(pass);
            let isHasErr = !validatePass(pass, setPassword);
            setShowPassWord(isHasErr);
          }}
          err={isShowPassword}
          errMessage="Password is invalid"
          value={password}
        />

        <PhoneNumberInput
          showCountryPicker
          onChanePhoneNumber={(phoneNumber: string) => {
            setphoneNumber(phoneNumber);
            let isHasErr = !validatePhoneNumber(phoneNumber, setphoneNumber);
            setPhoneNumber(isHasErr);
            console.log('isHasErr', isPhoneNumber);
          }}
          err={isPhoneNumber}
          errMessage="Phone number is invalid"
          value={phoneNumber}
        />
        <Text style={styles.textForgot}>Forget Password</Text>
        <Button
          onPress={() => {
            navigation.navigate('EnterPassWordScreen');
          }}
          label="Next"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignInScreen');
          }}>
          <Text style={styles.textAccount}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
  );
}
export default EnterPhoneNumberScreen;
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
});
