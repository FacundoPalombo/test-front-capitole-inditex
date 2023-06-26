import React from 'react';
import { Await, useRouteLoaderData } from 'react-router-dom';

import styles from './styles.module.scss';
import Results from '../Results';
import PodcastEpisodesTable from '../PodcastEpisodesTable';

const PodcastList = () => {
  const { podcasts } = useRouteLoaderData('podcasts');
  console.log(podcasts);
  return (
    <section className={styles.podcast_list__content}>
      <React.Suspense fallback={<div>loading...</div>}>
        <Await resolve={podcasts} errorElement={<div>ups error</div>}>
          {function (podcasts) {
            return (
              <>
                <Results results={podcasts.resultCount} />
                <PodcastEpisodesTable podcasts={podcasts.results} />
              </>
            );
          }}
        </Await>
      </React.Suspense>
    </section>
  );
};

export default PodcastList;
