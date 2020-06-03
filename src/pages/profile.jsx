import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import LoggedHeader from '../components/dashboard/logged-header';
import Sidebar from '../components/dashboard/sidebar';
import currentUser from '../core/services/current-user';
import httpLoader from '../core/services/http-loader';

import '../styles/profile.css';
import profile from '../images/home-farmer.jpg';
import currentUserApi from '../core/services/current-user/api';

async function save({
  id,
  email,
  phone_number: phone,
  first_name: fName,
  last_name: lName,
  state,
  city,
  country,
  street
}) {
  await httpLoader.onSave(
    currentUserApi.updateUser(id, {
      id,
      email,
      phone_number: phone,
      first_name: fName,
      last_name: lName,
      state,
      city,
      country,
      street
    })
  );
  currentUser.refresh();
}

function Profile() {
  const [profileData, setProfile] = useState({});
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await httpLoader.onLoad(currentUser.get());
      setProfile(data);
    })();
  }, []);

  function updateValue(key, { target: { value } }) {
    setProfile({
      ...profileData,
      [key]: value
    });
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      save(profileData);
    }

    setValidated(true);
  };

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
              <img alt="upload" data-testid="profilePic" src={profile} />
              <Form.File
                data-testid="uploadInput"
                id="custom-file"
                label="Update profile"
                custom
                className="browse-btn"
              />
            </div>
            <div className="profile-data">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      data-testid="firstnameInput"
                      type="text"
                      size="sm"
                      value={profileData.first_name || ''}
                      onChange={(e) => updateValue('first_name', e)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      data-testid="lastnameInput"
                      type="text"
                      size="sm"
                      value={profileData.last_name || ''}
                      onChange={(e) => updateValue('last_name', e)}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      data-testid="emailInput"
                      type="email"
                      size="sm"
                      value={profileData.email || ''}
                      onChange={(e) => updateValue('email', e)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      data-testid="numberInput"
                      type="text"
                      size="sm"
                      value={profileData.phone_number || ''}
                      onChange={(e) => updateValue('phone_number', e)}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      data-testid="countryInput"
                      type="text"
                      size="sm"
                      value={profileData.country || ''}
                      onChange={(e) => updateValue('country', e)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State/Region</Form.Label>
                    <Form.Control
                      data-testid="stateInput"
                      type="text"
                      size="sm"
                      value={profileData.state || ''}
                      onChange={(e) => updateValue('state', e)}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      data-testid="cityInput"
                      type="text"
                      size="sm"
                      value={profileData.city || ''}
                      onChange={(e) => updateValue('city', e)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      data-testid="addressInput"
                      type="text"
                      size="sm"
                      value={profileData.street || ''}
                      onChange={(e) => updateValue('street', e)}
                    />
                  </Form.Group>
                </Form.Row>
                <Button className="default-btn signup-btn" type="submit" data-testid="update" size="sm">
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

export default Profile;
