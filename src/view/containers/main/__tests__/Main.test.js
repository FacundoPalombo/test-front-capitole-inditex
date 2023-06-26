import React from 'react';
import Main from '../Main';
import renderWithRouter from '../../../../utils/tests/renderWithRouter';

jest.mock(
  'react-spinners',
  () =>
    ({ loading }) =>
      loading ? 'Spinner Component' : ''
);

describe('Main unit test', () => {
  afterAll(jest.clearAllMocks);
  it('should render ok with props', () => {
    const { asFragment } = renderWithRouter(<Main />, {
      route: '/podcast/1234',
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
