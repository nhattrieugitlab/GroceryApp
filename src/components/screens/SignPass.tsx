import {
  View,
  Text,
  ImageRequireSource,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import TextInputcs from '../TextInput';

type SignUpProps = {
  label?: string;
  imagekey: ImageSourcePropType;
  imageEye: ImageSourcePropType;
  // backgroundColor?: string;
};

const categoryData: SignUpProps[] = [
  {
    label: 'Password',
    imagekey: require('../../assets/images/key'),
    imageEye: require('./media/images/visibility_24px.png'),
  },
  {
    label: 'Comfirm Password',
    imagekey: require('../../assets/images/key'),
    imageEye: require('./media/images/visibility_24px.png'),
  },
];

// const renderCategoryItem = ({item}: {item: SignUpProps}) => {
//   return (
//     <View style={{marginRight: 22, marginBottom: 27}}>
//       <TextInputcs
//         label={item.label}
//         imagekey={item.imagekey}
//         imageEye={item.imageEye}
//       />
//     </View>
//   );
// };

function SignPass(): JSX.Element {
  return (
    <ScrollView style={styles.body}>
      <Image source={require('../../assets/images/Arrow.png')} />
      <Text style={styles.textSignUp}>Sign Up</Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/phonepass.png')}
      />
      <Text style={styles.textEnterPass}>Enter the password</Text>
      <Text style={styles.textContent}>
        For the security & safety please choose a password
      </Text>
      <View style={styles.PassContainer}>
        <TextInputcs
          label={categoryData[0].label}
          imageEye={categoryData[0].imageEye}
          imagekey={categoryData[0].imagekey}
        />
      </View>
      <View style={styles.PassContainer}>
        <TextInputcs
          label={categoryData[1].label}
          imageEye={categoryData[1].imageEye}
          imagekey={categoryData[1].imagekey}
        />
        {/* {categoryData.map((item, index) => (
          <View key={index} style={{marginRight: 22, marginBottom: 27}}>
            <TextInputcs
              label={item.label}
              imagekey={item.imagekey}
              imageEye={item.imageEye}
            />
          </View>
        ))} */}
      </View>
      <TouchableOpacity style={styles.buttoncontainer}>
        <Text style={styles.buttonLabel}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.textlabel3}> Already have an account?Login</Text>
    </ScrollView>
  );
}

export default SignPass;
const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
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
    flex: 1,
    paddingHorizontal: 48,
    paddingVertical: 15,
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#AC8E71',
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
