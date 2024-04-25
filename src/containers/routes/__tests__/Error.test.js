import React from 'react';
import { render } from '@testing-library/react';
import ErrorComponent from '../Error';
import { useRouteError } from 'react-router-dom';
import error404Fixture from '@App/utils/tests/fixtures/fail';

jest.mock('react-router-dom');

describe('Error unit test', () => {
  afterAll(jest.clearAllMocks);
  it('should render ok match snapshot', () => {
    useRouteError.mockReturnValueOnce(error404Fixture);
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
