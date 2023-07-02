import React from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import PodcastDetail from './components/PodcastDetail';
import styles from './styles.module.scss';
import {
  episodes as episodesQuery,
  channels as channelsQuery,
} from '../../../queries/podcasts';
import { useIsFetching, useQuery } from '@tanstack/react-query';
import DetailSkeleton from '../../components/DetailSkeleton';

const Podcasts = () => {
  const params = useParams();
  const { data: podcasts } = useQuery(episodesQuery(params.podcastId));
  const { data: channels } = useQuery(channelsQuery());
  const isLoading = useIsFetching() > 0;
  const podcast = podcasts?.results.find((p) => p.kind === 'podcast');

  const description = channels?.feed.entry.find(
    (channel) => channel.id.attributes['im:id'] === params.podcastId
  ).summary.label;

  // skeleton for early feedback
  if (isLoading) return <DetailSkeleton />;
  return (
    <section id="podcasts" className={styles.podcasts}>
      <div data-testid="podcast-detail" className={styles.podcasts__page}>
        <section className={styles.podcasts__detail}>
          <Link
            aria-label="Go back to podcast detail page."
            to={`/podcast/${params.podcastId}`}
            className={styles.podcasts__detail_navigable}
          >
            {podcast && (
              <PodcastDetail
                image={podcast.artworkUrl600}
                title={podcast.trackName}
                artist={podcast.artistName}
                description={description}
              />
            )}
          </Link>
        </section>
        <Outlet />
      </div>
    </section>
  );
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const query = episodesQuery(params.podcastId);
    const podcasts = await queryClient.ensureQueryData(query);
    return podcasts;
  };

export default Podcasts;
