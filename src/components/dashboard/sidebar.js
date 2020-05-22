import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import '../../styles/sidebar.css';
import profile from '../../images/home-farmer.jpg';

function Sidebar() {
  const page = window.location.pathname;

  return (
    <div className="sidebar-container">
      <div>
        <img alt="sidebar-profile" src={profile} className="sidebar-profile" />
        <p className="text-center sidebar-name">Jane Doe</p>
      </div>
      <ListGroup>
        <ListGroup.Item active={page === '/profile'}>Update Profile</ListGroup.Item>
        <ListGroup.Item active={page === '/my-resources'}>Manage Resources</ListGroup.Item>
        <ListGroup.Item active={page === '/my-lists'}>Manage Lists</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Sidebar;
