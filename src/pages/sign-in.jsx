import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import AuthLayout from '../components/auth-layout';
import '../styles/signup.css';
import '../styles/sign-in.css';
import httpLoader from '../core/services/http-loader';
import authenticationService from '../core/services/authentication-service';
import notificationService from '../core/services/notification';
import currentUser from '../core/services/current-user';

const submit = async (data) => {
  const { access_token: token, user, refresh_token: refresh } = await httpLoader.onLoad(
    authenticationService.login(data),
    {
      400: () => notificationService.showWarning({
        title: 'Invalid Credentials',
        message: 'We could not log you in with provided credentials. Please verify and try again.',
        rejectLabel: 'close'
      })
    }
  );

  currentUser.saveToken({ token, refresh, ...user });
  currentUser.set(user);
  navigate('/');
};

const Signin = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      submit({
        email: form.formGridEmail.value,
        password: form.formGridPassword.value
      });
    }

    setValidated(true);
  };
  return <AuthLayout>
    <Row className="signup-section">
      <Col className="signin-form" md={6} sm={7} xs={12}>
        <p className="sub-title text-center">Welcome Back</p>
        <p className="medium-text text-center">
          Marshmallow cake chocolate bar biscuit chocolate cake dragée.
          Tootsie roll topping oat cake
        </p>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control data-testid="emailInput" type="email" size="sm" required />
          </Form.Group>
          <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control data-testid="passwordInput" type="password" size="sm" />
          </Form.Group>
          <Form.Row>
            <Form.Group md={{ span: 3, offset: 9 }} as={Col}>
              <Link to="/page-2" data-testid="forgetPassword" className="medium-text privacy-link">Forget Password</Link>
            </Form.Group>
          </Form.Row>
          <Button className="default-btn signup-btn" type="submit" data-testid="login" size="sm">LOGIN</Button>
        </Form>
      </Col>
      <Col className="signin-info" md={6} sm={5} xs={12}>
        <Link to="/" className="site-name">SITE NAME</Link>
        <div className="info-elements">
          <p className="sub-title">DO YOU HAVE AN ACCOUNT?</p>
          <p className="medium-text">
            Marshmallow cake chocolate bar biscuit chocolate cake dragée.
            Tootsie roll topping oat cake
        </p>
          <Button className="default-btn" data-testid="signup" size="sm"><Link to="/signup" >SIGNUP</Link></Button>
        </div>
      </Col>
    </Row>
  </AuthLayout>;
};

export default Signin;
