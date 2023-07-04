import { Text, Image, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState, useRef } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AuthStackParamList, VerifyCodeScreenProps } from '../routes/AuthNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import VerifyCodeInput from '../components/VerifyCodeInput';
import TabBar from '../components/Tabbar';
function VerifyCodeScreen(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const registerInfo = useRoute<VerifyCodeScreenProps['route']>().params
  const [code, setCode] = useState(['', '', '', '', '']);
  const otpInputRefs = useRef([]);
  return (
    <ScreenContainer>
      <TabBar showBackButton label='SignUp' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image}
          source={require('../assets/images/PhoneVerifi.png')}
        />
        <Text style={styles.textEnter}>Enter Verification Code</Text>
        <Text style={styles.textSend}>
          {
            `We have sent SMS to:\n+84 ${registerInfo.phoneNumber}`
          }
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <VerifyCodeInput />
          <VerifyCodeInput />
          <VerifyCodeInput />
          <VerifyCodeInput />
          <VerifyCodeInput />
        </View>
      </ScrollView>
      <Button
        style={{ marginTop: 30 }}
        onPress={() => {
          navigation.navigate('SignInScreen');
        }}
        label="Register"
      />
    </ScreenContainer>
  );
}
export default VerifyCodeScreen;
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
  image: {
    alignSelf: 'center',
    resizeMode: 'stretch',
    width: 301,
    height: 323,
  },
  textEnter: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#7F4E1D',
    fontFamily: 'Klarna Text',
  },
  textSend: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'left',
    color: '#7F4E1D',
    fontFamily: 'Klarna Text',
  },
});
