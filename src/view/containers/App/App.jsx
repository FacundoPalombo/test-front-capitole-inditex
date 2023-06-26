import React from 'react';
import './styles.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Routes from '../routes/Routes';

const App = () => {
  const routes = createBrowserRouter(Routes);
  return <RouterProvider router={routes} />;
};

export default App;
