import React from 'react';

import ErrorPage from './Error';
import Main from '../main';
import Podcast, { loader as podcastLoader } from '../podcast';
import Episode from '../episode';
import Search, { loader as searchLoader } from '../search';
import PodcastList from '../podcast/components/PodcastList/PodcastList';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

//? Al inicio no sabía si hacer la pagina con todas las features de react 18 inclusive las nuevas de react router o hacer
//? custom hooks y utilizar el ciclo de vida de react de manera vanilla... Opte por la solucion sencilla de hacer la
//? SPA con react-router y utilizar todas las features a la mano... También me tentó hacer SSR pero como el ejercicio pedia CSR, lo respeté.
const Routes = [
  {
    element: <Main />,
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
