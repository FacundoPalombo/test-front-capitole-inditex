import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import PodcastDetail from './components/PodcastDetail/PodcastDetail';
import styles from './styles.module.scss';
import {
  episodes as episodesQuery,
  channels as channelsQuery,
} from '@App/queries/podcasts';
import { useIsFetching, useQuery } from '@tanstack/react-query';
import DetailSkeleton from '@components/DetailSkeleton/DetailSkeleton';

const Podcasts = () => {
  const params = useParams();
  const { data: episodes } = useQuery(episodesQuery(params.podcastId));
  const { data: channels } = useQuery(channelsQuery());
  const isLoading = useIsFetching() > 0;

  const episode = episodes?.results?.find((p) => p.kind === 'podcast');

  const description = channels?.feed.entry.find(
    (channel) => channel.id.attributes['im:id'] === params.podcastId
  )?.summary.label;

  // skeleton for early feedback
  if (isLoading) return <DetailSkeleton />;
  return (
    <section id="podcasts" className={styles.podcasts}>
      <div data-testid="podcast-detail" className={styles.podcasts__page}>
        {episode && (
          <PodcastDetail
            image={episode.artworkUrl600!}
            title={episode.trackName!}
            artist={episode.artistName!}
            description={description!}
          />
        )}
        <Outlet />
      </div>
    </section>
  );
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const episodesResolvedQuery = episodesQuery(params.podcastId);
    const channelsResolvedQuery = channelsQuery();
    const episodes = await queryClient.ensureQueryData(episodesResolvedQuery);
    const channels = await queryClient.ensureQueryData(channelsResolvedQuery);
    return { channels, episodes };
  };

export default Podcasts;
