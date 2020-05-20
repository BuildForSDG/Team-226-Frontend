import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import AuthLayout from '../components/auth-layout';
import '../styles/signup.css';
import httpLoader from '../core/services/http-loader';
import authenticationService from '../core/services/auth/authentication-service';
import { encodeToParams } from '../core/utils';
import notificationService from '../core/services/notification';

const submit = async (data) => {
  try {
    const { response } = await httpLoader
      .onLoad(
        authenticationService.register(encodeToParams(data)),
        {
          400: () => notificationService.showWarning({
            title: 'Error',
            message: 'The Email address you specified has already been taken. Please verify that you typed it correctly or proceed to sign in.',
            rejectLabel: 'close'
          })
        }
      );

    if (response === 'success') {
      notificationService.showSuccess({
        title: 'Registration Successfull',
        message: 'Your account was successfully created. You can now login',
        resolveLabel: 'Login'
      }).then(() => navigate('signin'));
    } else {
      notificationService.showWarning({
        title: 'Error occured',
        message: 'There was an error registering. Please check your inputs and try again',
        resolveLabel: 'close'
      });
    }
    return response;
  } catch (e) { return e; }
};

const Signup = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      submit({
        first_name: form.formGridFirstName.value,
        last_name: form.formGridLastName.value,
        email: form.formGridEmail.value,
        password: form.formGridPassword.value,
        password2: form.formGridPassword.value
      });
    }

    setValidated(true);
  };
  return <AuthLayout>
    <Row className="signup-section">
      <Col className="signup-info" md={6} sm={5} xs={12}>
        <Link to="/" >SITE NAME</Link>
        <div className="info-elements">
          <p className="sub-title">ALREADY HAVE AN ACCOUNT ?</p>
          <p className="medium-text">
            Marshmallow cake chocolate bar biscuit chocolate cake dragée.
            Tootsie roll topping oat cake
        </p>
          <Button className="default-btn" data-testid="login" size="sm">LOGIN</Button>
        </div>
      </Col>
      <Col className="signup-form" md={6} sm={7} xs={12}>
        <p className="sub-title text-center">Create an account</p>
        <p className="medium-text text-center">
          Marshmallow cake chocolate bar biscuit chocolate cake dragée.
          Tootsie roll topping oat cake
        </p>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>Firstname</Form.Label>
              <Form.Control data-testid="firstnameInput" type="text" size="sm" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Lastname</Form.Label>
              <Form.Control data-testid="lastnameInput" type="text" size="sm" required />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control data-testid="emailInput" type="email" size="sm" required />
          </Form.Group>
          <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control data-testid="passwordInput" type="password" size="sm" required />
          </Form.Group>
          <Form.Row>
            <Form.Group xs={8} as={Col}>
              <Form.Check type="checkbox" data-testid="termsConditions" label="I agree to terms and Conditions" required />
            </Form.Group>
            <Form.Group xs={4} as={Col}>
              <Link to="/page-2" data-testid="pricacyPolicy" className="medium-text privacy-link">Privacy Policies</Link>
            </Form.Group>
          </Form.Row>
          <Button className="default-btn signup-btn" type="submit" data-testid="signup" size="sm">SIGNUP</Button>
        </Form>
      </Col>
    </Row>
  </AuthLayout>;
};

export default Signup;
