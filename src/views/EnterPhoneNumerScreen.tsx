import {
  Text,
  Image,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {logInTextInputStyles} from '../components/style/TextInputStyle';
import React, {useState} from 'react';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import TabBar from '../components/Tabbar';
import PhoneNumberInput from '../components/PhoneNumberInput';
import {AppImage} from '../constant/IconPath';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../routes/AuthNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
function EnterPhoneNumberScreen(): JSX.Element {
  // const appNavigation =
  //   useNavigation<NativeStackNavigationProp<AppStackParams>>();
  const [isShowPassword, setShowPassWord] = useState<boolean>(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  return (
    <ScreenContainer>
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <TabBar showBackButton onBackPress={() => {}} label="Sig Up" />
        <Image style={styles.image} source={AppImage.EnterPhoneNumber} />
        <View style={logInTextInputStyles.container}>
          <TextInput
            keyboardType="number-pad"
            style={[logInTextInputStyles.textInput, {paddingLeft: 70}]}
            placeholderTextColor={'#AC8E71'}
            placeholder="Name Surname"
          />
        </View>
        <PhoneNumberInput showCountryPicker />
        <Text style={styles.textForgot}>Forget Password</Text>
        <Button
          onPress={() => {
            navigation.navigate('EnterPassWordScreen');
          }}
          label="Next"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignInScreen');
          }}>
          <Text style={styles.textAccount}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
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
