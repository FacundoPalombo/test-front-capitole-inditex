import React from 'react';
import { Outlet, useLoaderData, useParams, Link } from 'react-router-dom';
import PodcastDetail from './components/PodcastDetail';
import styles from './styles.module.scss';
import {
  episodes as episodesQuery,
  channels as channelsQuery,
} from '../../../queries/podcasts';

const Podcasts = () => {
  const { podcasts, channels } = useLoaderData();
  const podcast = podcasts.results.find((p) => p.kind === 'podcast');
  const params = useParams();

  const description = channels.feed.entry.find(
    (channel) => channel.id.attributes['im:id'] === params.podcastId
  ).summary.label;

  return (
    <section id="podcasts" className={styles.podcasts}>
      <div data-testid="podcast-detail" className={styles.podcasts__page}>
        <section className={styles.podcasts__detail}>
          <Link
            aria-label="Go back to podcast detail page."
            to={`/podcast/${params.podcastId}`}
            className={styles.podcasts__detail_navigable}
          >
            <PodcastDetail
              image={podcast.artworkUrl600}
              title={podcast.trackName}
              artist={podcast.artistName}
              description={description}
            />
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
    const [podcasts, channels] = await Promise.all([
      episodesQuery(queryClient)({ podcastId: params.podcastId }),
      channelsQuery(queryClient)(),
    ]);

    return { podcasts, channels };
  };

export default Podcasts;
