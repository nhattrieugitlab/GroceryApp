import {
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import PasswordInput from '../components/PasswordInput';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import TabBar from '../components/Tabbar';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { AuthStackParamList, EnterPasswordScreenProps } from '../routes/AuthNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AnimatedLottieView from 'lottie-react-native';
import { AppAnimation } from '../constant/IconPath';
function EnterPasswordScreen(): JSX.Element {
  const [isShowPassword, setShowPassWord] = useState<boolean>(false);
  const [isShowPasswordComfirm, setShowPassWordComfirm] =
    useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [passwordComfirm, setPasswordComfirm] = useState<string>('');
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const validatePassword = () => {
    if (!password.trim() || !passwordComfirm.trim()) {
      Alert.alert('Err', "Please enter your password.")
      return false
    }
    if (password.trim() !== passwordComfirm.trim()) {
      Alert.alert('Err', "Password mismatch.")
      return false
    }
    return true
  }
  const registerInfo = useRoute<EnterPasswordScreenProps['route']>().params
  return (
    <ScreenContainer>
      <TabBar
        showBackButton
        onBackPress={() => { }}
        label="Comfirm password"
      />
      <AnimatedLottieView source={AppAnimation.Password} loop autoPlay style={styles.image} />
      <ScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false} style={styles.body}>
        <Text style={styles.textEnterPass}>Enter the password</Text>
        <Text style={styles.textContent}>
          For the security & safety please choose a password
        </Text>
        <PasswordInput
          setShowPassword={setShowPassWord}
          isShowPassword={isShowPassword}
          value={password}
          onChangeText={setPassword}
        />
        <PasswordInput
          setShowPassword={setShowPassWordComfirm}
          isShowPassword={isShowPasswordComfirm}
          value={passwordComfirm}
          onChangeText={setPasswordComfirm}
        />
        <Button
          style={{ marginTop: 20 }}
          onPress={() => {
            if (password !== passwordComfirm) {
              Alert.alert('Password and Confirm Password must be the same');
              console.log('password', password);
              return;
            }
            navigation.navigate('VerifyCodeScreen', { password: password, userName: registerInfo.userName, phoneNumber: registerInfo.phoneNumber });
          }}
          label="Next"
        />
        <TouchableOpacity
          onPress={() => {
            if (validatePassword()) {
            }
          }}>
          <Text style={styles.textlabel3}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    alignSelf: 'center',
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
