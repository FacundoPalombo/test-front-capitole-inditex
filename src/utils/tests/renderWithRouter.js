import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import Routes from '../../view/containers/routes/Routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const renderWithRouter = ({ route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  const routes = createBrowserRouter(Routes);

  return {
    user: userEvent.setup(),
    ...render(<RouterProvider router={routes} />),
  };
};
export default renderWithRouter;
