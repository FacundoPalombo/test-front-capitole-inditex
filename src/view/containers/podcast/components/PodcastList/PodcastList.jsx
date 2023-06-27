import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';

import styles from './styles.module.scss';
import Results from '../Results';
import PodcastEpisodesTable from '../PodcastEpisodesTable';

const PodcastList = () => {
  const { podcasts } = useRouteLoaderData('podcasts');
  return (
    <section
      data-testid="podcast-list"
      className={styles.podcast_list__content}
    >
      <Results results={podcasts.resultCount} />
      <PodcastEpisodesTable podcasts={podcasts.results} />
    </section>
  );
};

export default PodcastList;
