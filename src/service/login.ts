import AxiosInstance from '../utilities/AxiosInstance';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const logIn = async (phoneNumber: string, password: string) => {
  try {
    const res: any = await AxiosInstance().post('/auth/login', {
      phoneNumber,
      password,
    });
    console.log(res.data);
    if (res) {
      await AsyncStorage.setItem('userName', phoneNumber);
      await AsyncStorage.setItem('userData', res.data);
      await AsyncStorage.setItem('accessToken', res.accessToken);
      return true;
    } else {
      Alert.alert('Thông báo', 'Sever có lỗi, vui lòng thử lại sau');
      return false;
    }
  } catch (err: any) {
    if (!err) {
      Alert.alert('Thông báo', 'Sever có lỗi, vui lòng thử lại sau');
      return false;
    }
    // if (err.isAxiosError) {
    //   Alert.alert('Thông báo', 'Có lỗi mạng');
    //   return false;
    // }
    if (err.response.status == 409) {
      Alert.alert(
        'Thông báo',
        'Tên tài khoản hoặc mật khẩu bạn nhập không chính xác,vui lòng thử lại',
      );
    }
    return false;
  }
};
export const logOut = async () => {
  await AsyncStorage.removeItem('accessToken');
};
export const checkPhoneNumberIsExits = async (phoneNumber: string) => {
  try {
    const res = await AxiosInstance().post('/auth/checkisexitsphonenumber', {
      phoneNumber,
    });
    console.log(res);
    return true;
  } catch (err) {
    console.log(err);
    Alert.alert('Notification', 'Your phonenumber is already exits!');
    return false;
  }
};

export const loginWithGooogle = async (idToken: string) => {
  try {
    console.log('dang login');
    const res: any = await AxiosInstance().post('/auth/logingoogle', {idToken});
    await AsyncStorage.setItem('accessToken', res.accessToken);
    console.log(res.data);
    await AsyncStorage.setItem('userData', JSON.stringify(res.data));
    return res;
  } catch (err) {
    console.log(err);
  }
};
