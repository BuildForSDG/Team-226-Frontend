import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import LoggedHeader from '../src/components/dashboard/logged-header';

afterEach(cleanup);

describe('Logged Header', () => {
  test('renders header component', () => {
    const { getByTestId } = render(<LoggedHeader />);

    const title = getByTestId('title');
    expect(title).toBeInTheDocument();

    const search = getByTestId('searchInput');
    expect(search).toBeInTheDocument();

    const resource = getByTestId('resourcesLink');
    expect(resource).toBeInTheDocument();

    const land = getByTestId('landLink');
    expect(land).toBeInTheDocument();

    const profile = getByTestId('profileLink');
    expect(profile).toBeInTheDocument();
  });
});
