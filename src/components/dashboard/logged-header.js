// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

import '../../styles/logged-header.css';
import profile from '../../images/home-farmer.jpg';

const LoggedHeader = ({ siteTitle }) => (
  <Navbar collapseOnSelect expand="lg" variant="dark">
    <Navbar.Brand data-testid="title" className="title" href="/home">
      {siteTitle}
    </Navbar.Brand>
    <Form.Group className="search-formGroup">
      <Form.Control type="text" data-testid="searchInput" placeholder="Search resources and land listings..." />
    </Form.Group>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link data-testid="resourcesLink" href="/">Resources</Nav.Link>
        <Nav.Link data-testid="landLink" href="/">Land</Nav.Link>
        <Nav.Link data-testid="profileLink" href="/profile"><img alt="user profile" className="profile-pic" src={profile} />Jane Doe</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

LoggedHeader.propTypes = {
  siteTitle: PropTypes.string
};

LoggedHeader.defaultProps = {
  siteTitle: ''
};

export default LoggedHeader;
