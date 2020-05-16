import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Signup from '../src/pages/signup.jsx';

afterEach(cleanup);

describe('Signup', () => {
  test('renders form componenets', () => {
    const { getByTestId } = render(<Signup />);

    // Test firstname
    const firstname = getByTestId('firstnameInput');
    expect(firstname).toBeInTheDocument();

    // Test lastname
    const lastname = getByTestId('lastnameInput');
    expect(lastname).toBeInTheDocument();

    // Test emial
    const email = getByTestId('emailInput');
    expect(email).toBeInTheDocument();

    // Test email
    const password = getByTestId('passwordInput');
    expect(password).toBeInTheDocument();

    // Test terms and condition
    const terms = getByTestId('termsConditions');
    expect(terms).toBeInTheDocument();

    // Test privacy policy
    const privacy = getByTestId('pricacyPolicy');
    expect(privacy).toBeInTheDocument();

    // Test login button
    const loginBtn = getByTestId('login');
    expect(loginBtn).toBeInTheDocument();

    // Test login button
    const signupBtn = getByTestId('signup');
    expect(signupBtn).toBeInTheDocument();
  });
});
