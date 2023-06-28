import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import PasswordInput from '../components/PasswordInput';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import TabBar from '../components/Tabbar';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../routes/AuthNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
function EnterPasswordScreen(): JSX.Element {
  const [isShowPassword, setShowPassWord] = useState<boolean>(false);
  const [isShowPasswordComfirm, setShowPassWordComfirm] =
    useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [passwordComfirm, setPasswordComfirm] = useState<string>('');
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  return (
    <ScreenContainer>
      <ScrollView style={styles.body}>
        <TabBar
          showBackButton
          onBackPress={() => {}}
          label="Comfirm password"
        />
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
          value={password}
          onChangeText={setPassword}
        />
        <PasswordInput
          setShowPassword={setShowPassWordComfirm}
          isShowPassword={isShowPasswordComfirm}
          placeHolder={'Confirm Password'}
          value={passwordComfirm}
          onChangeText={setPasswordComfirm}
        />
        <Button
          style={{marginTop: 20}}
          onPress={() => {
            if (password !== passwordComfirm) {
              Alert.alert('Password and Confirm Password must be the same');
              console.log('password', password);
              return;
            }
            navigation.navigate('VerifyCodeScreen');
          }}
          label="Next"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EnterPassWordScreen');
          }}>
          <Text style={styles.textlabel3}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 280,
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
