/* eslint-disable react/display-name, react/prop-types */
import React from 'react';
import Main from '../Main';
import { render } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
  Link: () => <div>MockLink</div>,
  Outlet: () => <div>MockOutlet</div>,
  useNavigation: jest.fn().mockReturnValue({ state: 'loading' }),
}));

jest.mock('react-spinners', () => ({
  BounceLoader: ({ loading }) =>
    loading ? <div>Loading...</div> : <div>not loading</div>,
}));

describe('Main unit test', () => {
  afterEach(jest.clearAllMocks);
  it('should render ok with props', () => {
    const { asFragment } = render(<Main />);
    expect(asFragment()).toMatchSnapshot();
  });
});
