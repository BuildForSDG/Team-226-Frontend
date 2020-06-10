import httpServer from '../http-server';

function getUserLand() {
  return httpServer.get('resource/user/land/');
}

export default {
  getUserLand
};
