import React from 'react';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import AuthLayout from '../components/auth-layout';
import SEO from '../components/seo';
import '../styles/signup.css';

const Signup = () => (
  <AuthLayout>
    {/* <SEO title="Signup" /> */}
    <Row className="signup-section">
      <Col className="signup-info" md={6} sm={5} xs={12}>
        <Link to="/" >SITE NAME</Link>
        <div className="info-elements">
          <p className="sub-title">ALREADY HAVE AN ACCOUNT ?</p>
          <p className="medium-text">
            Marshmallow cake chocolate bar biscuit chocolate cake dragée.
            Tootsie roll topping oat cake
        </p>
          <Button className="default-btn" size="sm">LOGIN</Button>
        </div>
      </Col>
      <Col className="signup-form" md={6} sm={7} xs={12}>
        <p className="sub-title text-center">Create an account</p>
        <p className="medium-text text-center">
          Marshmallow cake chocolate bar biscuit chocolate cake dragée.
          Tootsie roll topping oat cake
        </p>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Firstname</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Lastname</Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" size="sm" />
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" size="sm" />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} id="formGridCheckbox">
              <Form.Check type="checkbox" label="I agree to terms and Conditions" />
            </Form.Group>
            <Form.Group as={Col} id="pricacyPolicy">
              <Link to="/page-2" className="medium-text privacy-link">Privacy Policies</Link>
            </Form.Group>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  </AuthLayout>
);

export default Signup;
