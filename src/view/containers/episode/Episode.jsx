import React from 'react';
import { useParams, useRouteLoaderData } from 'react-router-dom';
import styles from './styles.module.scss';

const Episode = () => {
  const { podcasts } = useRouteLoaderData('podcasts');
  const params = useParams();

  const trackName = podcasts.results.find(
    (podcast) => podcast.trackId.toString() === params.episodeId
  ).trackName;

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
    <section id="episode" data-testid="episode" className={styles.episode}>
      <div className={styles.episode__content}>
        <h2 className={styles.episode__title}>{trackName}</h2>
        <em
          className={styles.episode__description}
          dangerouslySetInnerHTML={createMarkup()}
        />
        <audio
          aria-label={`audio:${trackName}`}
          className={styles.episode__audio}
          src={
            podcasts.results.find(
              (podcast) => podcast.trackId.toString() === params.episodeId
            ).episodeUrl
          }
          controls
        ></audio>
      </div>
    </section>
  );
};

export default Episode;
