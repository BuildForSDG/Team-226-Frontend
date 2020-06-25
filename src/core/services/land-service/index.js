import httpServer from '../http-server';

function getUserLand() {
  return httpServer.get('resource/user/land/');
}

function createLand(data) {
  return httpServer.post('/resource/land/', data);
}

function deleteLand(landId) {
  return httpServer.delete(`/resource/land/${landId}/`);
}

function editLand(landId, data) {
  return httpServer.put(`/resource/land/${landId}/`, data);
}

export default {
  getUserLand,
  createLand,
  deleteLand,
  editLand
};
