import React from 'react';
import { getPodcast } from '../../../services/podcast';
import {
  Await,
  Outlet,
  useLoaderData,
  useParams,
  Link,
} from 'react-router-dom';
import PodcastDetail from './components/PodcastDetail';
import styles from './styles.module.scss';
import { getSongs } from '../../../services/songs';

const Podcasts = () => {
  const { podcasts, songs } = useLoaderData();
  const podcast = podcasts.results.find((p) => p.kind === 'podcast');
  const params = useParams();

  /* Quite a bit overkill all this implementation because
    description is on a different api call. But there it is.*/
  const description = songs.feed.entry.find(
    (song) => song.id.attributes['im:id'] === params.podcastId
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
  const [podcasts, songs] = await Promise.all([
    getPodcast({ podcastId: params.podcastId }),
    getSongs(),
  ]);

  return { podcasts, songs };
}

export default Podcasts;
