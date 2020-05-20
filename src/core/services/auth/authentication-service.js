import httpServer from '../http-server';

function login({ email, password }) {
  return httpServer.post('auth/login', { email, password });
}

function register(data) {
  return httpServer.post('auth/register/', data);
}

export default {
  login,
  register
};
