import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import { API_BASE_URL } from './urls';

// const setAuthToken = (token) => {
// 	if (token) {
// 		axios.defaults.headers.common['x-auth-token'] = token;
// 	} else {
// 		delete axios.defaults.headers.common['x-auth-token'];
// 	}
// };

const axios = Axios.create({
  baseURL: API_BASE_URL,
});

axios.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    const token = await AsyncStorage.getItem('@Token');
    if (token) {
      config.headers.common['x-auth-token'] = token;
      config.headers.common['Content-Type'] = 'application/json';
    }
    console.log(config.url);
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default axios;