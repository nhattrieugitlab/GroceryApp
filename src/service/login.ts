import AxiosInstance from '../utilities/AxiosInstance';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const logIn = async (userName: string, password: string) => {
  try {
    const res: any = await AxiosInstance().post('/auth/login', {
      userName,
      password,
    });
    console.log(res);
    if (res) {
      await AsyncStorage.setItem('userName', userName);
      await AsyncStorage.setItem('accessToken', res.accessToken || '');
      return true;
    } else {
      Alert.alert('Thông báo', 'Sever có lỗi, vui lòng thử lại sau');
      return false;
    }
  } catch (err: any) {
    console.log('loi nek', err);
    if (err == undefined) {
      Alert.alert('Thông báo', 'Sever có lỗi, vui lòng thử lại sau');
    }
    if (err.response.status == 409) {
      Alert.alert(
        'Thông báo',
        'Tên tài khoản hoặc mật khẩu bạn nhập không chính xác,vui lòng thử lại',
      );
    }
    return false;
  }
};
const saveAccessTokenToLocalStorage = () => {};
