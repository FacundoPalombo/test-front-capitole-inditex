import createError from 'http-errors';

import { GET_PODCAST, GET_PODCASTS } from '@App/utils/constants/URL';
import { Channels } from '@App/model/Channels';
import { EpisodesResults } from '@App/model/Episodes';

export type PodcastParams = {
  podcastId: string;
};

export const getPodcastEpisodes = ({ podcastId }: PodcastParams) => {
  const podcastParams: PodcastParams = { podcastId };

  const req = new Request(GET_PODCAST(podcastParams), {
    cache: 'default',
  });

  const response = fetch(req)
    .then((res) => {
      //? Acá dudaron por que utilicé early return en ves de cachear el error.
      //! Es por que la api de Fetch del DOM no lanza (throw) ningún error http de tipo 4xx 5xx como errores, a diferencia de librerías como axios o como HTTPXmlRequests,
      //! Fetch solo guarda el estado de la respuesta y un status interno de "ok<boolean>" mas la info de la respuesta. Para mas info de la api visitar: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful
      //! Aun así, se podía mejorar el detalle del error para loggearlo e identificarlo, así que lo mejore un poco.
      if (!res.ok) {
        const error = createError(
          res.status,
          `Error processing the request: ${res.statusText}`
        );
        throw error;
      }
      return res.json();
    })
    .then((data: EpisodesResults) => data)
    .catch((err) => {
      console.error(err);
      throw err;
    });
  return response;
};

export const getPodcastChannels = () => {
  const req = new Request(GET_PODCASTS, {
    cache: 'default',
  });

  const response = fetch(req)
    .then((res) => {
      //? Acá dudaron por que utilicé early return en ves de cachear el error.
      //! Es por que la api de Fetch del DOM no lanza (throw) ningún error http de tipo 4xx 5xx como errores, a diferencia de librerías como axios o como HTTPXmlRequests,
      //! Fetch solo guarda el estado de la respuesta y un status interno de "ok<boolean>" mas la info de la respuesta. Para mas info de la api visitar: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful
      //! Aun así, se podía mejorar el detalle del error para loggearlo e identificarlo, así que lo mejore un poco.
      if (!res.ok) {
        const error = createError(
          res.status,
          `Error processing the request: ${res.statusText}`
        );
        throw error;
      }
      return res.json();
    })
    .then((data: Channels) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
  return response;
};
