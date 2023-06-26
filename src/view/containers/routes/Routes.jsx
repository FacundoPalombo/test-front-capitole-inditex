import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import ErrorPage from './Error';

import Main from '../main';
import Podcast from '../podcast';
import Episode from '../episode';
import Search, { loader as searchLoader } from '../search';

const Routes = [
  {
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Search />,
        path: '/',
        loader: searchLoader,
      },
      {
        element: <Podcast />,
        path: 'podcast/:podcastId',
        errorElement: <ErrorPage />,
      },
      {
        element: <Episode />,
        path: 'podcast/:podcastId/episode/:episodeId',
        errorElement: <ErrorPage />,
      },
    ],
  },
];

export default Routes;
