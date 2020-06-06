import httpServer from '../http-server';

function createResource(data) {
  return httpServer.post('resource/post/', data);
}

function getResourceCategory() {
  return httpServer.get('resource/category/');
}

export default {
  createResource,
  getResourceCategory
};
