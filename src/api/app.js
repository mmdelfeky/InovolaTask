import axios from 'axios';
import {ApiErrorException, ApiErrorTypes} from './utils/errors';
export default class App {
  getAppData = async () => {
    try {
      const res = await axios.post(
        'https://run.mocky.io/v3/3a1ec9ff-6a95-43cf-8be7-f5daa2122a34',
      );
      return res.data;
    } catch (error) {
      throw new ApiErrorException(
        ApiErrorTypes.CONNECTION_ERROR,
        'networkConnectionError',
      );
    }
  };
}
