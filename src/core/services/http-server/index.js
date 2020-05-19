import HttpClient from '../../http-client';

export const SERVER_API_URL = 'localhost:8000';

class HttpServer extends HttpClient {
  constructor() {
    super(SERVER_API_URL);
  }
}

export default new HttpServer();
