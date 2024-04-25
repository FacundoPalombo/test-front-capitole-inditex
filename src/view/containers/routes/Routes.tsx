import React from 'react';

import ErrorPage from './Error';
import Layout from '../layout/Layout';
import Podcast, { loader as podcastLoader } from '../podcast/Podcast';
import Episode from '../episode/Episode';
import Search, { loader as searchLoader } from '../search/Search';
import PodcastList from '../podcast/components/PodcastList/PodcastList';
import { QueryClient } from '@tanstack/react-query';
import type { RouteObject } from 'react-router';

const queryClient = new QueryClient();

//? Al inicio no sabía si hacer la pagina con todas las features de react 18 inclusive las nuevas de react router o hacer
//? custom hooks y utilizar el ciclo de vida de react de manera vanilla... Opte por la solucion sencilla de hacer la
//? SPA con react-router y utilizar todas las features a la mano... También me tentó hacer SSR pero como el ejercicio pedia CSR, lo respeté.
const Routes: RouteObject[] = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Search />,
        path: '/',
        loader: searchLoader(queryClient),
      },
      {
        element: <Podcast />,
        path: 'podcast/:podcastId',
        errorElement: <ErrorPage />,
        loader: podcastLoader(queryClient),
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
