import httpServer from '../http-server';

function getUserList() {
  return httpServer.get('resource/user/list/');
}

export default {
  getUserList
};
