import Geolocation from 'react-native-geolocation-service';
export const getCurrentLocation = (setCurrentLocation: Function) => {
  Geolocation.getCurrentPosition(
    position => {
      const {latitude, longitude} = position.coords;
      setCurrentLocation({latitude: latitude, longitude: longitude});
    },
    error => {
      console.log('Lỗi lấy vị trí hiện tại: ', error);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
};
