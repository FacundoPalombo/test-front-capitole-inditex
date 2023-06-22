import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

describe('App integration test', () => {
  it('should render ok with props', () => {
    const { asFragment } = render(<App example={22} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
