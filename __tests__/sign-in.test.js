import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Signin from '../src/pages/sign-in.jsx';

afterEach(cleanup);

describe('Login', () => {
  test('renders form componenets', () => {
    const { getByTestId } = render(<Signin />);

    // Test email
    const email = getByTestId('emailInput');
    expect(email).toBeInTheDocument();

    // Test password
    const password = getByTestId('passwordInput');
    expect(password).toBeInTheDocument();

    // Test forget password
    const terms = getByTestId('forgetPassword');
    expect(terms).toBeInTheDocument();

    // Test login button
    const loginBtn = getByTestId('login');
    expect(loginBtn).toBeInTheDocument();

    // Test login button
    const signupBtn = getByTestId('signup');
    expect(signupBtn).toBeInTheDocument();
  });
});
