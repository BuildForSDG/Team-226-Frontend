import React from 'react';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import AuthLayout from '../components/auth-layout';
import '../styles/signup.css';
import '../styles/sign-in.css';

const Signin = () => (
  <AuthLayout>
    <Row className="signup-section">
      <Col className="signin-form" md={6} sm={7} xs={12}>
        <p className="sub-title text-center">Welcome Back</p>
        <p className="medium-text text-center">
          Marshmallow cake chocolate bar biscuit chocolate cake dragée.
          Tootsie roll topping oat cake
        </p>
        <Form>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Email</Form.Label>
            <Form.Control data-testid="emailInput" type="email" size="sm" />
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Password</Form.Label>
            <Form.Control data-testid="passwordInput" type="password" size="sm" />
          </Form.Group>
          <Form.Row>
            <Form.Group md={{ span: 3, offset: 9 }} as={Col}>
              <Link to="/page-2" data-testid="pricacyPolicy" className="medium-text privacy-link">Forget Password</Link>
            </Form.Group>
          </Form.Row>
          <Button className="default-btn signup-btn" type="submit" data-testid="signup" size="sm">LOGIN</Button>
        </Form>
      </Col>
      <Col className="signin-info" md={6} sm={5} xs={12}>
        <Link to="/" >SITE NAME</Link>
        <div className="info-elements">
          <p className="sub-title">DO YOU HAVE AN ACCOUNT?</p>
          <p className="medium-text">
            Marshmallow cake chocolate bar biscuit chocolate cake dragée.
            Tootsie roll topping oat cake
        </p>
          <Button className="default-btn" data-testid="login" size="sm"><Link to="/signup" >SIGNUP</Link></Button>
        </div>
      </Col>
    </Row>
  </AuthLayout>
);

export default Signin;
