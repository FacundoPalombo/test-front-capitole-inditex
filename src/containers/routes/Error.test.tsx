import React from 'react';
import { render } from '@testing-library/react';
import { useRouteError } from 'react-router-dom';

import error404Fixture from '@App/utils/tests/fixtures/fail';

import ErrorComponent from './Error';

jest.mock('react-router-dom');

describe('Error unit test', () => {
  afterAll(jest.clearAllMocks);
  it('should render ok match snapshot', () => {
    (useRouteError as jest.Mock).mockReturnValueOnce(error404Fixture);
    const { asFragment } = render(<ErrorComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should handle unexpected error', () => {
    const errorMock = new Error('Unexpected Error');
    (useRouteError as jest.Mock).mockReturnValueOnce(errorMock);
    const { asFragment } = render(<ErrorComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
