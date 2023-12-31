import React from 'react';
import { useParams } from 'react-router-dom';
import { useIsFetching, useQuery } from '@tanstack/react-query';
import { episodes as episodesQuery } from '../../../queries/podcasts';
import DetailSkeleton from '../../components/DetailSkeleton';
import EpisodeDetail from './components/EpisodeDetail';

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
      <EpisodeDetail
        description={podcast.description}
        episodeUrl={podcast.episodeUrl}
        trackName={podcast.trackName}
      />
    )
  );
};

export default Episode;
