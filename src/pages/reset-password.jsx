import React, { useState } from 'react';
import { Link } from 'gatsby';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import AuthLayout from '../components/auth-layout';
import '../styles/reset-password.css';
import doneImg from '../images/good.png';

const stepOne = (handleNext) => (
  <div className="reset-component">
    <p className="sub-title text-center"><strong>Reset Password</strong></p>
    <p className="text-center medium-text reset-desctiption">
      Enter your email below to start the process.
      The email should be associated with an existing account.
    </p>
    <Form.Group controlId="formGridAddress1">
      <Form.Label>Email</Form.Label>
      <Form.Control data-testid="emailInput" type="email" size="sm" />
    </Form.Group>
    <Form.Row>
      <Form.Group md={{ span: 3, offset: 9 }} as={Col}>
        <Link to="/sign-in" data-testid="login" className="medium-text privacy-link">Login</Link>
      </Form.Group>
    </Form.Row>
    <Button className="default-btn signup-btn" onClick={() => handleNext()} data-testid="sendEmail" size="sm">SEND EMAIL</Button>
  </div>
);

const stepTwo = () => (
  <div className="reset-component">
    <p className="sub-title text-center"><strong>Reset Password</strong></p>
    <p className="text-center medium-text reset-desctiption">
      Verify your email in order to continue with the reset password process.
    </p>
    <div>
      <img alt="completed" className="completed-img" src={doneImg} />
    </div>
  </div>
);

function ResetPassword() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(2);
  };
  return (
    <AuthLayout>
      <div className="reset-password">
        {
          step === 1
            ? stepOne(handleNext)
            : stepTwo()
        }
      </div>
    </AuthLayout>
  );
}

export default ResetPassword;
