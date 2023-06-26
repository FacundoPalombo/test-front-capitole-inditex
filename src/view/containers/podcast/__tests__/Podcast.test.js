import React from 'react';
import Podcast from '../Podcast';
import { render } from '@testing-library/react';

describe('Podcast unit test', () => {
  it('should render ok with props', () => {
    const { asFragment } = render(<Podcast />);
    expect(asFragment()).toMatchSnapshot();
  });
});
