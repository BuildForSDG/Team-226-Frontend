import React from 'react';
import { navigate } from 'gatsby';
import currentUser from '../core/services/current-user';

const Feed = () => {
  if (!currentUser.isLoggedIn()) {
    navigate('/');
  }
  return <div>
    Feed will be here <br/>
    <button onClick={() => currentUser.logoutAndRedirect()}>logout</button>
  </div>;
};

export default Feed;
