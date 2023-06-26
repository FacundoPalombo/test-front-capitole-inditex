import React from 'react';
import { getPodcast } from '../../../services/podcast';
import { Await, defer, useLoaderData } from 'react-router-dom';
import PodcastDetail from '../../components/PodcastDetail';
import Results from './components/Results';
import PodcastEpisodesTable from './components/PodcastEpisodesTable';
import styles from './styles.module.scss';

const Podcasts = () => {
  const { podcasts } = useLoaderData();

  function renderComponent(podcasts) {
    return (
      <div className={styles.podcasts__page}>
        <section className={styles.podcasts__detail}>
          <PodcastDetail
            image={
              podcasts.results.find((p) => p.kind === 'podcast').artworkUrl600
            }
            title={podcasts.results.find((p) => p.kind === 'podcast').trackName}
            artist={
              podcasts.results.find((p) => p.kind === 'podcast').artistName
            }
            description={
              podcasts.results.find((p) => p.kind === 'podcast').description
            }
          />
        </section>
        <section className={styles.podcasts__content}>
          <Results results={podcasts.resultCount} />
          <PodcastEpisodesTable podcasts={podcasts.results} />
        </section>
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
  return defer({ podcasts });
}

export default Podcasts;
