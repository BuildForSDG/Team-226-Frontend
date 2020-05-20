const TOKEN_STORE_LOCATION = 'auth/token';
const isLoggedIn = () => !!localStorage.getItem(TOKEN_STORE_LOCATION);

const saveToken = (token) => localStorage.setItem(TOKEN_STORE_LOCATION, token);

export default {
  isLoggedIn,
  saveToken
};
