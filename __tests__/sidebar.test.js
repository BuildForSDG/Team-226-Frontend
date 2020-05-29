import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Sidebar from '../src/components/dashboard/sidebar';

afterEach(cleanup);

describe('Sidebar', () => {
  test('renders sidebar component', () => {
    const { getByTestId } = render(<Sidebar />);

    const profile = getByTestId('profileImg');
    expect(profile).toBeInTheDocument();

    const username = getByTestId('username');
    expect(username).toBeInTheDocument();

    const resource = getByTestId('resourcesLink');
    expect(resource).toBeInTheDocument();

    const list = getByTestId('listLink');
    expect(list).toBeInTheDocument();
  });
});
