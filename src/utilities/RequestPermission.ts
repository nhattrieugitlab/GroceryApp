import {PermissionsAndroid} from 'react-native';
export const requestLocationPermission = async (
  onGetLocationSucess: Function,
) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Ứng dụng cần truy cập vị trí',
        message:
          'Cho phép ứng dụng truy cập vị trí để sử dụng tính năng liên quan đến vị trí.',
        buttonPositive: 'Đồng ý',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      onGetLocationSucess();
      console.log('Đã cấp quyền truy cập vị trí.');
    } else {
      console.log('Quyền truy cập vị trí bị từ chối.');
    }
  } catch (error) {
    console.log('Lỗi yêu cầu quyền truy cập vị trí: ', error);
  }
};
