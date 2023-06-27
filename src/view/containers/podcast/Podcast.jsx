import React from 'react';
import { getPodcastEpisodes } from '../../../services/podcast';
import { Outlet, useLoaderData, useParams, Link } from 'react-router-dom';
import PodcastDetail from './components/PodcastDetail';
import styles from './styles.module.scss';
import { getPodcastChannels } from '../../../services/podcast';

const Podcasts = () => {
  const { podcasts, channels } = useLoaderData();
  const podcast = podcasts.results.find((p) => p.kind === 'podcast');
  const params = useParams();

  /* Quite a bit overkill all this implementation because
    description is on a different api call. But there it is.*/
  const description = channels.feed.entry.find(
    (channel) => channel.id.attributes['im:id'] === params.podcastId
  ).summary.label;

  return (
    <section id="podcasts" className={styles.podcasts}>
      <div data-testid="podcast-detail" className={styles.podcasts__page}>
        <section className={styles.podcasts__detail}>
          <Link
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

export async function loader({ params }) {
  const [podcasts, channels] = await Promise.all([
    getPodcastEpisodes({ podcastId: params.podcastId }),
    getPodcastChannels(),
  ]);

  return { podcasts, channels };
}

export default Podcasts;
