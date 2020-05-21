import React from 'react';
import Feed from './feed';
import Home from './home';
import currentUser from '../core/services/current-user';

const Main = (props) => (currentUser.isLoggedIn() ? <Feed { ...props } /> : <Home { ...props } />);

export default Main;
