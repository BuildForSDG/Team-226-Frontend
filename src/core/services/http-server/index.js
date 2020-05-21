import HttpClient from '../../http-client';
import config from '../../config';
import store from '../current-user/store';

class HttpServer extends HttpClient {
  constructor() {
    super(`${config.API_URL}/api/`);

    this.interceptRequest((request) => {
      if (store.token) {
        request.headers.common.Authorization = `Bearer ${store.token}`;
      }
      return request;
    });
  }
}

export default new HttpServer();
