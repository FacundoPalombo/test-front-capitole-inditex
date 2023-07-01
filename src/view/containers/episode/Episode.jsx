import React, { useMemo } from 'react';
import { useParams, useRouteLoaderData } from 'react-router-dom';
import styles from './styles.module.scss';
import Markdown from '../../components/Markdown';

const Episode = () => {
  const { podcasts } = useRouteLoaderData('podcasts');
  const params = useParams();

  const podcast = useMemo(
    () =>
      podcasts.results.find(
        (podcast) => podcast.trackId.toString() === params.episodeId
      ),
    [podcasts, params]
  );

  const { episodeUrl: audioSource, trackName, description } = podcast;

  return (
    <section id="episode" data-testid="episode" className={styles.episode}>
      <div className={styles.episode__content}>
        <h2 className={styles.episode__title}>{trackName}</h2>
        <em className={styles.episode__description}>
          <Markdown>{description}</Markdown>
        </em>
        <audio
          aria-label={`audio:${trackName}`}
          className={styles.episode__audio}
          src={audioSource}
          controls
        ></audio>
      </div>
    </section>
  );
};

export default Episode;
