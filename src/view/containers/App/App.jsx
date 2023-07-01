import React from 'react';
import './styles.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Routes from '../routes/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const App = () => {
  const routes = createBrowserRouter(Routes);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
