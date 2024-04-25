import React from 'react';
import Layout from '../Layout';
import { render } from '@testing-library/react';
import { useIsFetching } from '@tanstack/react-query';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
  Outlet: () => <div>MockOutlet</div>,
  useNavigation: jest.fn().mockReturnValue({ state: 'loading' }),
}));

jest.mock('react-spinners', () => ({
  BounceLoader: ({ loading }) =>
    loading ? <div>Loading...</div> : <div>not loading</div>,
}));

jest.mock('@tanstack/react-query');

describe('Layout unit test', () => {
  afterEach(jest.clearAllMocks);
  it('should render ok with props, when is loading', () => {
    useIsFetching.mockReturnValueOnce(0);
    const { asFragment } = render(<Layout />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render ok with props, when loading is false', () => {
    useIsFetching.mockReturnValueOnce(2);
    const { asFragment } = render(<Layout />);
    expect(asFragment()).toMatchSnapshot();
  });
});
