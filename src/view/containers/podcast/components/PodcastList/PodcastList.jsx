import React from 'react';

import styles from './styles.module.scss';
import Results from '../Results';
import PodcastEpisodesTable from '../PodcastEpisodesTable';
import { useQuery } from '@tanstack/react-query';
import { episodes as episodesQuery } from '../../../../../queries/podcasts';
import { useParams } from 'react-router-dom';

const PodcastList = () => {
  const params = useParams();
  const { data: podcasts } = useQuery({
    ...episodesQuery(params.podcastId),
    networkMode: 'offlineFirst',
  });

  return (
    <section
      data-testid="podcast-list"
      className={styles.podcast_list__content}
    >
      <Results results={podcasts?.resultCount} />
      <PodcastEpisodesTable podcasts={podcasts?.results} />
    </section>
  );
};

export default PodcastList;
