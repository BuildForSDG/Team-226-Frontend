import httpServer from '../http-server';

function createResource(data) {
  return httpServer.post('resource/post/', data);
}

export default {
  createResource
};
