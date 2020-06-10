import httpServer from '../http-server';

function getUserLand() {
  return httpServer.get('resource/user/land/');
}

function createLand(data) {
  return httpServer.post('/resource/land/', data);
}

function deleteLand(landId) {
  return httpServer.delete(`/resource/land/${landId}`);
}

export default {
  getUserLand,
  createLand,
  deleteLand
};
