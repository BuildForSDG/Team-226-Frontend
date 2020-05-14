import React from 'react';
import renderer from 'react-test-renderer';

import Signup from '../src/pages/signup.jsx';

describe('Signup', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Signup title="Signup" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders form componenets', () => {
    const signup = renderer.create(<Signup />);
    const signInstance = signup.getInstance();

    const inputs = signInstance.findAll('input');
    expect(inputs.length).toBe(4);
  });
});
