import {Text, Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState, useRef} from 'react';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../routes/AuthNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import VerifyCodeInput from '../components/VerifyCodeInput';
// qui vip pro
function VerifyCodeScreen(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [code, setCode] = useState(['', '', '', '', '']);
  const otpInputRefs = useRef([]);
  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={{width: 8.49, height: 14}}
          source={require('../assets/icon/Back.png')}
        />
        <Text style={styles.textSignUp}>Sign Up</Text>
        <Image
          style={styles.image}
          source={require('../assets/images/PhoneVerifi.png')}
        />
        <Text style={styles.textEnter}>Enter Verification Code</Text>
        <View style={{width: 180, height: 53, marginTop: 13}}>
          <Text style={styles.textSend}>
            We have sent SMS to: 046 XXX XX XX
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <VerifyCodeInput />
          <VerifyCodeInput />
          <VerifyCodeInput />
          <VerifyCodeInput />
          <VerifyCodeInput />
        </View>
      </ScrollView>
      <Button
        style={{marginTop: 30}}
        onPress={() => {
          navigation.navigate('SignInScreen');
        }}
        label="Sign Up"
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
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 21.6,
    color: '#7F4E1D',
    fontFamily: 'Klarna Text',
  },
});
