import React from 'react';
import { Await, useRouteLoaderData } from 'react-router-dom';
import styles from './styles.module.scss';

const Episode = () => {
  const { podcasts } = useRouteLoaderData('podcasts');
  console.log(podcasts);

  function renderComponent(podcasts) {
    return (
      <div className={styles.episode__content}>
        <h2 className={styles.episode__title}>{podcasts.trackName}</h2>
        <code className={styles.episode__description}>
          {podcasts.description}
        </code>
        <audio
          className={styles.episode__audio}
          src={podcasts.episodeUrl}
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
