import {Image, ScrollView, StyleSheet, Text} from 'react-native';
import {AppImage} from '../constant/IconPath';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../routes/AuthNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const WelComeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  return (
    <ScreenContainer>
      <ScrollView>
        <Image style={styles.img} source={AppImage.Welcome} />
        <Text style={styles.label1}>Realax and shop</Text>
        <Text style={styles.label2}>
          Shop online and get grocories delivered from stores to your home in as
          fast as 1 hour .
        </Text>
        <Button
          onPress={() => {
            navigation.navigate('EnterPhoneNumberScreen');
          }}
          label="Sign up"
        />
        <Button
          onPress={() => {
            navigation.navigate('SignInScreen');
          }}
          style={{marginTop: 10}}
          textColor="#FF5E00"
          label="Sign in"
          backGroundColor="white"
          borderColor="#FF5E00"
        />
      </ScrollView>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  label2: {
    marginBottom: 51,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#7F4E1D',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.2,
    width: 257,
  },
  label1: {
    color: '#7F4E1D',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 24,
    marginTop: 33,
  },
  img: {
    alignSelf: 'center',
    marginTop: 80,
    width: 330,
    height: 360,
  },
});
export default WelComeScreen;
