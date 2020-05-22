import httpServer from '../http-server';

function login({ email, password }) {
  return httpServer.post('auth/login/', { email, password });
}

function register(data) {
  return httpServer.post('auth/register/', data);
}

function logout() {
  return httpServer.post('auth/logout/');
}


export default {
  login,
  register,
  logout
};
