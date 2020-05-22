import httpServer from '../http-server';

function loadUser(id) {
  return httpServer.get(`user/${id}`);
}

export default {
  loadUser
};
