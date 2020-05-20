import HttpClient from '../../http-client';
import config from '../../config';

class HttpServer extends HttpClient {
  constructor() {
    super(`${config.API_URL}/api/`);
  }
}

export default new HttpServer();
