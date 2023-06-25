import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

jest.mock('../../routes/Routes', () => () => 'RoutesMockComponent');
jest.mock('react-router-dom');

describe('App integration test', () => {
  afterAll(jest.clearAllMocks);
  it('should render ok with props', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
