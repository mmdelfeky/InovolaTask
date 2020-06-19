import {AppApi} from '../api';
export default class App {
  constructor() {
    this.appApi = new AppApi();
  }

  getAppData = async () => {
    let data = null;
    try {
      data = await this.appApi.getAppData();
    } catch (apiErrorException) {
      console.log('apiErrorException==>', apiErrorException);
      alert(apiErrorException.msg);
    } finally {
      return data;
    }
  };
}
