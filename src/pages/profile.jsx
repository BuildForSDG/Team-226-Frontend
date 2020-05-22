import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import LoggedHeader from '../components/dashboard/logged-header';
import Sidebar from '../components/dashboard/sidebar';

import profile from '../images/home-farmer.jpg';
import '../styles/profile.css';

function Dashboard() {
  return (
    <div>
      <LoggedHeader siteTitle="Farm Voice" />
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9} className="right-component">
        <div className="profile-container">
    <div className="profile-upload">
      <img alt="upload" src={profile} />
      <Form.File id="custom-file" label="Update profile" custom className="browse-btn" />
    </div>
    <div className="profile-data">
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Firstname</Form.Label>
            <Form.Control data-testid="firstnameInput" type="text" size="sm" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Lastname</Form.Label>
            <Form.Control data-testid="lastnameInput" type="text" size="sm" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control data-testid="emailInput" type="email" size="sm" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Number</Form.Label>
            <Form.Control data-testid="numberInput" type="text" size="sm" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Country</Form.Label>
            <Form.Control data-testid="countryInput" type="text" size="sm" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Control data-testid="stateInput" type="text" size="sm" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control data-testid="cityInput" type="text" size="sm" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Address</Form.Label>
            <Form.Control data-testid="addressInput" type="text" size="sm" />
          </Form.Group>
        </Form.Row>
        <Button className="default-btn signup-btn" type="submit" data-testid="signup" size="sm">
          UPDATE
        </Button>
      </Form>
    </div>
  </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
