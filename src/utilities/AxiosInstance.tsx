import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        timeout: 5000,
        baseURL: 'https://appfoodfoly.onrender.com/'
    });
    axiosInstance.interceptors.request.use(
        async (config: any) => {
            const token = await AsyncStorage.getItem('accessToken');
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'content-Type': contentType,
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;