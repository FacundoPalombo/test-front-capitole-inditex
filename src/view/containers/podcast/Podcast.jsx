import React from 'react';
import { getPodcast } from '../../../services/podcast';
import {
  Await,
  Outlet,
  defer,
  useLoaderData,
  useParams,
} from 'react-router-dom';
import PodcastDetail, {
  PodcastDetailSkeleton,
} from './components/PodcastDetail';
import styles from './styles.module.scss';
import { getSongs } from '../../../services/songs';

const Podcasts = () => {
  const { podcasts, songs } = useLoaderData();
  const params = useParams();
  function renderComponent(data) {
    const podcast = data.results.find((p) => p.kind === 'podcast');
    return (
      <div data-testid="podcast-detail" className={styles.podcasts__page}>
        <section className={styles.podcasts__detail}>
          <React.Suspense fallback={<PodcastDetailSkeleton />}>
            <Await resolve={songs}>
              {function (songs) {
                // Quite a bit overkill all this implementation because
                // description is on a different api call. But there it is.
                const description = songs.feed.entry.find(
                  (song) => song.id.attributes['im:id'] === params.podcastId
                ).summary.label;

                console.log(songs);
                return (
                  <PodcastDetail
                    image={podcast.artworkUrl600}
                    title={podcast.trackName}
                    artist={podcast.artistName}
                    description={description}
                  />
                );
              }}
            </Await>
          </React.Suspense>
        </section>
        <Outlet />
      </div>
    );
  }

  return (
    <section id="podcasts" className={styles.podcasts}>
      <React.Suspense fallback={<div>...loading</div>}>
        <Await resolve={podcasts} errorElement={<div>ups! error</div>}>
          {renderComponent}
        </Await>
      </React.Suspense>
    </section>
  );
};

export function loader({ params }) {
  const podcasts = getPodcast({ podcastId: params.podcastId });
  const songs = getSongs();
  return defer({ podcasts, songs });
}

export default Podcasts;
