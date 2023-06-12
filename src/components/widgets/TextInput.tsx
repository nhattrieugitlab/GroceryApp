import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';

type TextInputProp = {
  // backgroupColor?: string;
  label?: string;
  //  textColor?: string;
  imagekey: ImageSourcePropType;
  imageEye: ImageSourcePropType;
};
// const categoryData: TextInputProp[] = [
//   {
//     label: 'Password',
//     imagekey: require('./media/images/key.png'),
//     imageEye: require('./media/images/user.png'),
//   },
//   {
//     label: 'Comfirm Password',
//     imagekey: require('./media/images/key.png'),
//     imageEye: require('./media/images/user.png'),
//   },
// ];

// const [isshowPassword, setisshowPassword] = useState<boolean>(false);
// const handleTogglePassword = () => {
//   setisshowPassword(!isshowPassword);
// };
function TextInputcs({label, imagekey, imageEye}: TextInputProp): JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      // onPress={handleTogglePassword}
      >
        <Image style={styles.imageKey} source={imagekey} />
      </TouchableOpacity>
      <TextInput
        style={[styles.textInput]}
        placeholder={label}
        placeholderTextColor={'#AC8E71'}></TextInput>
      <TouchableOpacity>
        <Image style={styles.imageEye} source={imageEye} />
      </TouchableOpacity>
    </View>
  );
}
export default TextInputcs;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageKey: {
    position: 'absolute',

    left: 20,
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
    marginTop: 16,
  },
  imageEye: {
    position: 'absolute',
    right: 30,
  },
});
