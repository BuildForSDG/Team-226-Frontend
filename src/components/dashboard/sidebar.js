import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import '../../styles/sidebar.css';
import profile from '../../images/home-farmer.jpg';

function Sidebar() {
  const page = window.location.pathname;

  return (
    <div className="sidebar-container">
      <div>
        <img data-testid="profileImg" alt="sidebar-profile" src={profile} className="sidebar-profile" />
        <p data-testid="username" className="text-center sidebar-name">Jane Doe</p>
      </div>
      <ListGroup>
        <ListGroup.Item data-testid="profileLink" active={page === '/profile'}>Update Profile</ListGroup.Item>
        <ListGroup.Item data-testid="resourcesLink" active={page === '/my-resources'}>Manage Resources</ListGroup.Item>
        <ListGroup.Item data-testid="listLink" active={page === '/my-lists'}>Manage Lists</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Sidebar;
