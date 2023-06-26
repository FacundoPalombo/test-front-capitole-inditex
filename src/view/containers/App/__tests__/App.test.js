/* eslint-disable react/display-name */

import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

jest.mock('../../routes/Routes', () => () => <div>RoutesMockComponent</div>);
jest.mock('react-router-dom');

describe('App unit test', () => {
  afterAll(jest.clearAllMocks);
  it('should render ok with props', () => {
    const createBrowserRouterMock = jest.fn;
    const RouterMock = () => <div>RouterMock</div>;

    RouterProvider.mockImplementationOnce(RouterMock);
    createBrowserRouter.mockImplementationOnce(createBrowserRouterMock);

    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();

    expect(createBrowserRouter).toHaveBeenCalledTimes(1);
  });
});
