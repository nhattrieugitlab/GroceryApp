import {
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import CountryPicker2 from '../components/CountryPicker2';
import {AppIcons} from '../constant/IconPath';
import TabBar from '../components/Tabbar';
import {useNavigation} from '@react-navigation/native';
import {AppStackParams} from '../routes/AppNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

function LoginScreen(): JSX.Element {
  const appNavigation =
    useNavigation<NativeStackNavigationProp<AppStackParams>>();
  const [isShowPassword, setShowPassWord] = useState<boolean>(false);
  const [isShowPasswordComfirm, setShowPassWordComfirm] =
    useState<boolean>(false);
  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TabBar showBackButton onBackPress={() => {}} label="SignUp" />
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
    marginVertical: 20,
    fontSize: 14,
    fontWeight: '400',
    color: '#FF5E00',
    lineHeight: 17,
    alignSelf: 'flex-end',
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
    width: '100%',
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
