import { navigate } from 'gatsby';
import Store from './store';
import api from './api';
import authenticationService from '../authentication-service';

let CURRENT_USER = null;

const isLoggedIn = () => Store.isLoggedIn;

const saveToken = ({ id, token, refresh }) => Store.save({ id, token, refresh });

const set = (user) => { CURRENT_USER = user; };

const refresh = async () => {
  if (!isLoggedIn()) {
    return Promise.reject();
  }

  const user = await api.loadUser(Store.userId);
  CURRENT_USER = user;
  return user;
};

const get = async () => (CURRENT_USER ? Promise.resolve(CURRENT_USER) : refresh());

const logout = async () => {
  if (isLoggedIn()) {
    const res = await authenticationService.logout();
    saveToken({});
    return res;
  }
  return Promise.resolve();
};

const logoutAndRedirect = (path = '/') => logout().then(() => navigate(path));

export default {
  isLoggedIn,
  saveToken,
  set,
  get,
  refresh,
  logout,
  logoutAndRedirect
};
