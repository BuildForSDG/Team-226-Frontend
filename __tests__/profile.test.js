import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Profile from '../src/pages/profile.jsx';

afterEach(cleanup);

describe('Profile', () => {
  test('renders profile component', () => {
    const { getByTestId } = render(<Profile />);

    const firstname = getByTestId('firstnameInput');
    expect(firstname).toBeInTheDocument();

    const lastname = getByTestId('lastnameInput');
    expect(lastname).toBeInTheDocument();

    const email = getByTestId('emailInput');
    expect(email).toBeInTheDocument();

    const number = getByTestId('numberInput');
    expect(number).toBeInTheDocument();

    const country = getByTestId('countryInput');
    expect(country).toBeInTheDocument();

    const state = getByTestId('stateInput');
    expect(state).toBeInTheDocument();

    const city = getByTestId('cityInput');
    expect(city).toBeInTheDocument();

    const address = getByTestId('addressInput');
    expect(address).toBeInTheDocument();

    const updatebtn = getByTestId('update');
    expect(updatebtn).toBeInTheDocument();

    const upload = getByTestId('uploadInput');
    expect(upload).toBeInTheDocument();

    const profile = getByTestId('profilePic');
    expect(profile).toBeInTheDocument();
  });
});
