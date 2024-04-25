import React from 'react';
import './styles.scss';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

import { DAY_IN_MILLISECONDS } from '@App/utils/constants/various';

import Routes from '../routes/Routes';

//? Acá puse el stale time en un día tambien por que en el ejercicio "forzosamente" pide que se actualice la cache por un dia,
//? asi que "simule" una estrategia de cache-first configurando (stale-while-revalidata === max-age),
//? advierto esto NO es una buena practica en este caso de uso, solamente si se usa una estrategia de caching agresivo.
//? Usualmente, staleWhileRevalidate se realiza cada menos tiempo para poder refrescar la cache que del lado de la api que se vuelve "non-fresh"
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: DAY_IN_MILLISECONDS,
      cacheTime: DAY_IN_MILLISECONDS,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const App = () => {
  const routes = createBrowserRouter(Routes);
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <RouterProvider router={routes} />
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
};

export default App;
