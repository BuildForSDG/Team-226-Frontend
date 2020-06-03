import httpServer from '../http-server';

function loadUser(id) {
  return httpServer.get(`user/${id}`);
}

function updateUser(id, data) {
  return httpServer.patch(`user/${id}`, data);
}

export default {
  loadUser,
  updateUser
};
