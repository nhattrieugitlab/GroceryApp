import {
  View,
  Text,
  ImageRequireSource,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

type SignUpProps = {
  image: ImageRequireSource;
  label?: string;
  label1?: string;
  label2?: string;
  label3?: string;
  color?: string;
};
// const [isshowPassword, setisshowPassword] = useState<boolean>(false);
// const handleTogglePassword = () => {
//   setisshowPassword(!isshowPassword);
// };
const SignPass: React.FC<SignUpProps> = (
  {image, label, label1, label2, label3},
  color,
) => {
  return (
    <ScrollView style={styles.body}>
      <Image source={require('./media/images/Arrow.png')} />
      <Text style={styles.textSignUp}>Sign Up</Text>
      <Image style={styles.image} source={image} />
      <Text style={styles.textEnterPass}>Enter the password</Text>
      <Text style={styles.textContent}>
        For the security & safety please choose a password
      </Text>
      <View style={styles.PassContainer}>
        <TextInput
          placeholder={label}
          style={[styles.textInput, {color: color || 'white'}]}>
          {/* <Text style={styles.textLabel}>{label}</Text> */}
        </TextInput>
        <Image
          style={styles.imageKey}
          source={require('./media/images/key.png')}
        />
        <Image
          style={styles.imageEye}
          source={require('./media/images/visibility_24px.png')}
        />
      </View>
      <View style={styles.PassContainer}>
        <TextInput
          style={[styles.textInput, {color: color || 'white'}]}
          placeholder={label1}></TextInput>
        <Image
          style={styles.imageKey}
          source={require('./media/images/key.png')}
        />
        <Image
          style={styles.imageEye}
          source={require('./media/images/visibility_24px.png')}
        />
        {/* <TouchableOpacity

        // onPress={handleTogglePassword}
        ></TouchableOpacity> */}
      </View>
      <TouchableOpacity style={styles.buttoncontainer}>
        <Text style={styles.buttonLabel}>{label2}</Text>
      </TouchableOpacity>
      <Text style={styles.textlabel3}> Already have an account? {label3}</Text>
    </ScrollView>
  );
};

export default SignPass;
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

  imageKey: {
    position: 'absolute',
    top: 25,
    left: 20,
  },
  imageEye: {
    position: 'absolute',
    top: 20,
    right: 30,
  },

  textInput: {
    position: 'relative',
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
  textLabel: {},
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
  PassContainer: {
    position: 'relative',
  },
});
