import React from 'react';
import Markdown from '@components/Markdown';
import styles from './styles.module.scss';
import { string } from 'prop-types';

type EpisodeDetailProps = {
  description: string;
  episodeUrl: string;
  trackName: string;
};

const EpisodeDetail = ({
  description,
  episodeUrl,
  trackName,
}: EpisodeDetailProps) => {
  return (
    <section id="episode" data-testid="episode" className={styles.episode}>
      <div className={styles.episode__content}>
        <h2 className={styles.episode__title}>{trackName}</h2>
        <em className={styles.episode__description}>
          <Markdown>{description}</Markdown>
        </em>
        <audio
          aria-label={`audio:${trackName}`}
          className={styles.episode__audio}
          src={episodeUrl}
          controls
        ></audio>
      </div>
    </section>
  );
};

EpisodeDetail.propTypes = {
  description: string,
  episodeUrl: string,
  trackName: string,
};

export default EpisodeDetail;
