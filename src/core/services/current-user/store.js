export const TOKEN_STORE_LOCATION = 'auth';

class Store {
  constructor(store = TOKEN_STORE_LOCATION) {
    this.store = store;
  }

  get data() {
    const data = localStorage.getItem(this.store);
    return data ? JSON.parse(data) : {};
  }

  get token() {
    return this.data.token;
  }

  get refresh() {
    return this.data.refresh;
  }

  get userId() {
    return this.data.id;
  }

  save({ id, token, refresh }) {
    localStorage
      .setItem(this.store, JSON.stringify({ id, token, refresh }));
  }

  get isLoggedIn() {
    return Boolean(this.token);
  }
}

export default new Store();
