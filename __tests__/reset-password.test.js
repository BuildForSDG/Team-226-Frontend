import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import ResetPassword from '../src/pages/reset-password.jsx';

afterEach(cleanup);

describe('Reset password', () => {
  test('renders reset password componenets', () => {
    const { getByTestId } = render(<ResetPassword />);

    // Test emial
    const email = getByTestId('emailInput');
    expect(email).toBeInTheDocument();

    // Test login link
    const loginLink = getByTestId('login');
    expect(loginLink).toBeInTheDocument();

    // Test login button
    const sendEmailBtn = getByTestId('sendEmail');
    expect(sendEmailBtn).toBeInTheDocument();
  });
});
