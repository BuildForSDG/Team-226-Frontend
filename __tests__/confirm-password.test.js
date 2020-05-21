import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import ConfirmPassword from '../src/pages/confirm-password.jsx';

afterEach(cleanup);

describe('Confirm password', () => {
  test('contains required input in confirm password componenet', () => {
    const { getByTestId } = render(<ConfirmPassword />);

    // Test password input
    const password = getByTestId('passwordInput');
    expect(password).toBeInTheDocument();

    // Test confirm password
    const confirmPassword = getByTestId('confirmPasswordInput');
    expect(confirmPassword).toBeInTheDocument();

    // Test reset button
    const resetBtn = getByTestId('resetBtn');
    expect(resetBtn).toBeInTheDocument();
  });
});
