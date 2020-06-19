import axios from 'axios';
import * as urls from './urls';
import store from '../../store/store';

export default (userData) => {
  // Add a request interceptor
  axios.interceptors.request.use(
    (config) => {
      config.baseURL = config.baseURL || urls.BASE_URL;
      return {
        ...config,
        headers: {
          ...config.headers,
          'Accept-Language': store.getState().lang.lang,

          Authorization: userData
            ? `Bearer ${userData.token}`
            : config.headers.Authorization,
        },
      };
    },
    (error) => {
      console.log('conferr', error);

      return Promise.reject(error);
    },
  );
};
