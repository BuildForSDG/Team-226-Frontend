import axios from 'axios';

export default class HttpClient {
  constructor(baseURL = '') {
    this.axios = axios.create({
      baseURL
    });

    this.interceptResponse(({ data }) => data);
  }

  get(url, params, options) {
    return this.axios.get(url, { params, ...options });
  }

  delete(url, params, options) {
    return this.axios.delete(url, { params, ...options });
  }

  head(url, params, options) {
    return this.axios.head(url, { params, ...options });
  }

  options(url, params, options) {
    return this.axios.options(url, { params, ...options });
  }

  post(url, data, options) {
    return this.axios.post(url, data, options);
  }

  put(url, data, options) {
    return this.axios.put(url, data, options);
  }

  patch(url, data, options) {
    return this.axios.patch(url, data, options);
  }

  all(...requests) {
    return this.axios.all(requests)
      .then(this.axios.spread((...responses) => responses));
  }

  interceptRequest(onSuccess, onError) {
    this.axios.interceptors.request
      .use(onSuccess, onError || (({ response }) => Promise.reject(response)));
  }

  interceptResponse(onSuccess, onError) {
    this.axios.interceptors.response
      .use(onSuccess, onError || (({ response }) => Promise.reject(response)));
  }
}
