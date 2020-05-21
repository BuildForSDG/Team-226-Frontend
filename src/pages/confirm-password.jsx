import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import AuthLayout from '../components/auth-layout';
import '../styles/reset-password.css';

function ConfirmPassword() {
  return (
    <AuthLayout>
      <div className="reset-password">
        <div className="reset-component">
          <p className="sub-title text-center"><strong>Confirm Password</strong></p>
          <p className="text-center medium-text reset-desctiption">
            Enter and confirm your new password for the account
            <strong><i>test@test.com</i></strong>
          </p>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Password</Form.Label>
            <Form.Control data-testid="passwordInput" type="password" size="sm" />
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control data-testid="confirmPasswordInput" type="password" size="sm" />
          </Form.Group>
          <Form.Row>
          </Form.Row>
          <Button className="default-btn signup-btn" type="submit" data-testid="resetBtn" size="sm">RESET</Button>
        </div>
      </div>
    </AuthLayout>
  );
}

export default ConfirmPassword;
