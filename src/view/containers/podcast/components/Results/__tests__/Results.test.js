import React from 'react';
import { render } from '@testing-library/react';
import Results from '../Results';

describe('Results unit tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Results />);
    expect(asFragment()).toMatchSnapshot();
  });
});
