import React from 'react';
import Episode from '../Episode';
import { render } from '@testing-library/react';

describe('Episode unit test', () => {
  it('should render ok with props', () => {
    const { asFragment } = render(<Episode />);
    expect(asFragment()).toMatchSnapshot();
  });
});
