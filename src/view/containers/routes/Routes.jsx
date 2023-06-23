import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import ErrorPage from './Error';

import Main from '../main';
import Podcast from '../podcast';
import Episode from '../episode';
import Search from '../search';

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Main />} errorElement={<ErrorPage />}>
          <Route path="/" element={<Search />} />
          <Route
            path="podcast/:podcastId"
            element={<Podcast />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="podcast/:podcastId/episode/:episodeId"
            element={<Episode />}
            errorElement={<ErrorPage />}
          />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
