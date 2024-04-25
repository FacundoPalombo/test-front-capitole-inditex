import React from 'react';
import styles from './styles.module.scss';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { episodes as episodesQuery } from '@App/queries/podcasts';
import { EpisodesResults } from '@App/model/Episodes';

import PodcastEpisodesTable from '../PodcastEpisodesTable/PodcastEpisodesTable';
import Results from '../Results/Results';

const PodcastList = () => {
  const params = useParams();
  const { data: podcasts } = useQuery<EpisodesResults>({
    ...episodesQuery(params.podcastId),
    networkMode: 'offlineFirst',
  });

  return (
    podcasts && (
      <section
        data-testid="podcast-list"
        className={styles.podcast_list__content}
      >
        <Results results={podcasts.resultCount} />
        <PodcastEpisodesTable podcasts={podcasts.results} />
      </section>
    )
  );
};

export default PodcastList;
