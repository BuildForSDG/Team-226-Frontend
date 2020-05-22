// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/header.css';

const Header = ({ siteTitle }) => (
  <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
    <Navbar.Brand href="/">{ siteTitle }</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link href="/sign-in">Sign In</Nav.Link>
        <Nav.Link eventKey={2} href="/signup">
          Sign Up
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
