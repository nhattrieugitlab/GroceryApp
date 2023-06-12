import {
  View,
  Text,
  ImageRequireSource,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';

type SignUpProps = {
  image: ImageRequireSource;
  label?: string;
  label1?: string;
  label2?: string;
  label3?: string;
  color?: string;
};
const categoryData: SignUpProps[] = [
  {
    label: 'Password',
    image: require('../../assets/images/phone.png'),
    label1: 'Enter your password',
    label2: 'Sign Up',
    label3: 'Login',
    color: '#AC8E71',
  },
];
const SignUp: React.FC<SignUpProps> = (
  {image, label, label1, label2, label3},
  color,
) => {
  return (
    <ScrollView style={styles.body}>
      <KeyboardAvoidingView behavior="position">
        <Image source={require('../../assets/images/Arrow.png')} />
        <Text style={styles.textSignUp}>Sign Up</Text>
        <Image style={styles.image} source={categoryData[0].image} />
        <TextInput
          style={[styles.textInput, {color: color || 'white'}]}
          placeholder={categoryData[0].label}></TextInput>
        <TextInput
          style={styles.textInputPassWord}
          placeholder={categoryData[0].label1}></TextInput>
        <Text style={styles.textContent}>
          We need to verify you. We will send you a one time verification code.{' '}
        </Text>
        <TouchableOpacity style={styles.buttoncontainer}>
          <Text style={styles.buttonLabel}>{categoryData[0].label2}</Text>
        </TouchableOpacity>
        <Text style={styles.textlabel3}>
          {' '}
          Already have an account? {categoryData[0].label3}
        </Text>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  image: {
    width: 348,
    height: 348,
  },
  textSignUp: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF5E00',
    letterSpacing: 0.4,
    lineHeight: 40,
    textAlign: 'center',
    marginRight: 20,
    justifyContent: 'center',
  },
  textInput: {
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    padding: 15,
    height: 50,
    marginTop: 10,
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
  body: {
    margin: 20,
    width: '100%',
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
