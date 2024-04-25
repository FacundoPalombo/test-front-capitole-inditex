import React from 'react';
import { render } from '@testing-library/react';
import ErrorComponent from '../Error';
import { useRouteError } from 'react-router-dom';
import { fail as fail404Fixture } from './error.fixture';

jest.mock('react-router-dom');

describe('Error unit test', () => {
  afterAll(jest.clearAllMocks);
  it('should render ok match snapshot', () => {
    useRouteError.mockReturnValueOnce(fail404Fixture);
    const { asFragment } = render(<ErrorComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should handle unexpected error', () => {
    const errorMock = new Error('Unexpected Error');
    useRouteError.mockReturnValueOnce(errorMock);
    const { asFragment } = render(<ErrorComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
