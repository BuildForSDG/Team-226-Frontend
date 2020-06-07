import httpServer from '../http-server';

function createCategory(data) {
  return httpServer.post('resource/category/', data);
}

function getCategory(count) {
  return httpServer.get(`resource/category?page=${count}`);
}

export default {
  createCategory,
  getCategory
};
