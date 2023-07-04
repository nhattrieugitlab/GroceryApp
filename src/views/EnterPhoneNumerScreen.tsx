import {
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Keyboard,
  Alert
} from 'react-native';
import React, { useState, useEffect } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import TabBar from '../components/Tabbar';
import PhoneNumberInput from '../components/PhoneNumberInput';
import { AppImage } from '../constant/IconPath';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '../routes/AuthNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { validatePhoneNumber } from '../utilities/ValidatePhoneNumber';
import { checkPhoneNumberIsExits } from '../service/login';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { setShowLoading } from '../redux/isLoadingSlice';
function EnterPhoneNumberScreen(): JSX.Element {
  // const appNavigation =
  //   useNavigation<NativeStackNavigationProp<AppStackParams>>();
  const [phoneNumber, setPhoneNumber] = useState<string>('338030682');
  const [surName, setSurName] = useState<string>('');
  const authNavigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const validateRegisterInfo = () => {
    if (!surName || !phoneNumber || !validatePhoneNumber(phoneNumber)) {
      Alert.alert('Notification', 'Please enter valid and complete registration information.')
      return false
    }
    return true
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
  const dispatch = useDispatch<AppDispatch>()
  return (
    <ScreenContainer>
      <View style={[{ justifyContent: 'space-between' }, isKeyboardOpen && { flex: 1 }]}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}>
          <TabBar showBackButton onBackPress={() => { }} label="Sign Up" />
          {
            !isKeyboardOpen && <Image style={styles.image} source={AppImage.EnterPhoneNumber} />
          }
          <PhoneNumberInput
            onChanePhoneNumber={setSurName}
            placeHolder='User Surname'
            value={surName} />
          <PhoneNumberInput
            showCountryPicker
            onChanePhoneNumber={setPhoneNumber}
            value={phoneNumber}
          />
        </ScrollView>
      </View>
      <>
        <Button
          style={{ marginVertical: 10 }}
          onPress={async () => {
            if (!validateRegisterInfo()) {
              return
            }
            dispatch(setShowLoading({ isShowLoading: true }))
            const checkPhoneNumberIsExitRes = await checkPhoneNumberIsExits(phoneNumber)
            if (checkPhoneNumberIsExitRes) {
              authNavigation.navigate('EnterPassWordScreen', { userName: surName, phoneNumber: phoneNumber });
            }
            dispatch(setShowLoading({ isShowLoading: false }))
          }}
          label="Next"
        />
        <TouchableOpacity
          onPress={() => {
            authNavigation.navigate('SignInScreen');
          }}>
          <Text style={styles.textAccount}>Already have an account? <Text style={{ color: '#FF5E00' }}>Login</Text></Text>
        </TouchableOpacity></>
    </ScreenContainer >
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
