import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import ErrorPage from './Error';

import Main from '../main';
import Podcast, { loader as podcastLoader } from '../podcast';
import Episode from '../episode';
import Search, { loader as searchLoader } from '../search';
import PodcastList from '../podcast/components/PodcastList/PodcastList';

const Routes = [
  {
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Search />,
        path: '/',
        id: 'search',
        loader: searchLoader,
      },
      {
        element: <Podcast />,
        path: 'podcast/:podcastId',
        errorElement: <ErrorPage />,
        id: 'podcasts',
        loader: podcastLoader,
        children: [
          {
            element: <PodcastList />,
            path: '',
            errorElement: <ErrorPage />,
          },
          {
            element: <Episode />,
            path: 'episode/:episodeId',
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
];

export default Routes;
