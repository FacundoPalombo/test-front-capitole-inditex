import React from 'react';
import { Await, useParams, useRouteLoaderData } from 'react-router-dom';
import styles from './styles.module.scss';

const Episode = () => {
  const { podcasts } = useRouteLoaderData('podcasts');

  function renderComponent(podcasts) {
    const params = useParams();
    console.log(podcasts, params);

    //? Nota para el reviewer. No entendi en el ejercicio si se quería interpretar solo html o html y markdown,
    //? o solo links de url (como se ve en el ejercicio).
    //? Pues en las listas de podcasts vi que utilizan algo de sintaxis md. Dejé la solución nativa de react con los riesgos de
    //? seguridad que puede tener pero se puede mejorar, por ej: con alguna lib externa que interprete MD y maneje xss.
    function createMarkup() {
      return {
        __html: podcasts.results.find(
          (podcast) => podcast.trackId.toString() === params.episodeId
        ).description,
      };
    }

    return (
      <div className={styles.episode__content}>
        <h2 className={styles.episode__title}>
          Episode:{' '}
          {
            podcasts.results.find(
              (podcast) => podcast.trackId.toString() === params.episodeId
            ).trackName
          }
        </h2>
        <em
          className={styles.episode__description}
          dangerouslySetInnerHTML={createMarkup()}
        />

        <audio
          className={styles.episode__audio}
          src={
            podcasts.results.find(
              (podcast) => podcast.trackId.toString() === params.episodeId
            ).episodeUrl
          }
          controls
        ></audio>
      </div>
    );
  }

  return (
    <section id="episode" className={styles.episode}>
      <React.Suspense fallback={<div>loading...</div>}>
        <Await resolve={podcasts} errorElement={<div>ups error</div>}>
          {renderComponent}
        </Await>
      </React.Suspense>
    </section>
  );
};

export default Episode;
