import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import Markdown from '../../components/Markdown';
import { useIsFetching, useQuery } from '@tanstack/react-query';
import { episodes as episodesQuery } from '../../../queries/podcasts';
import DetailSkeleton from '../../components/DetailSkeleton';

const Episode = () => {
  const params = useParams();
  const { data: podcasts } = useQuery(episodesQuery(params.podcastId));

  const isLoading = useIsFetching() > 0;

  const podcast = podcasts?.results.find(
    (podcast) => podcast.trackId.toString() === params.episodeId
  );

  if (isLoading) return <DetailSkeleton />;
  return (
    podcast && (
      <section id="episode" data-testid="episode" className={styles.episode}>
        <div className={styles.episode__content}>
          <h2 className={styles.episode__title}>{podcast.trackName}</h2>
          <em className={styles.episode__description}>
            <Markdown>{podcast.description}</Markdown>
          </em>
          <audio
            aria-label={`audio:${podcast.trackName}`}
            className={styles.episode__audio}
            src={podcast.episodeUrl}
            controls
          ></audio>
        </div>
      </section>
    )
  );
};

export default Episode;
