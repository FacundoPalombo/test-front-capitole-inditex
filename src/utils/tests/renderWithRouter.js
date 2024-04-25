/* istanbul ignore file */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import routes from '../../containers/routes/Routes';
import {
  RouterProvider,
  createBrowserRouter,
  createMemoryRouter,
} from 'react-router-dom';

const renderWithRouter = ({ route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  const router = createBrowserRouter(routes);

  return {
    user: userEvent.setup(),
    ...render(<RouterProvider router={router} />),
  };
};

const renderWithMemoryRouter = ({
  route = '/',
  initialEntries = ['/'],
  ...routerOptions
} = {}) => {
  window.history.pushState({}, 'Test page', route);

  const router = createMemoryRouter(routes, {
    initialEntries,
    ...routerOptions,
  });

  return {
    user: userEvent.setup(),
    ...render(<RouterProvider router={router} />),
  };
};

export { renderWithMemoryRouter };

export default renderWithRouter;
