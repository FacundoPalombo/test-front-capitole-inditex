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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import noop from '@utils/noop';

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

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: noop,
    },
  });

  const router = createMemoryRouter(routes, {
    initialEntries,
    ...routerOptions,
  });

  return {
    user: userEvent.setup(),
    ...render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    ),
  };
};

export { renderWithMemoryRouter };

export default renderWithRouter;
