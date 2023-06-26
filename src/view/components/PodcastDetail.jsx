import React from 'react';
import styles from './styles.module.scss';
import { string } from 'prop-types';

const PodcastDetail = ({ image, title, artist, description }) => {
  return (
    <aside className={styles.podcast_detail__card}>
      <img
        className={styles.podcast_detail__picture}
        src={image}
        alt={artist}
        aria-label={title}
      />
      <hr className={styles.podcast_detail__separator} />
      <h3 className={styles.podcast_detail__title}>{title}</h3>
      <em className={styles.podcast_detail__artist}>{artist}</em>
      {description && (
        <>
          <hr className={styles.podcast_detail__separator} />
          <p className={styles.podcast_detail__description}>
            <strong>Description: </strong>
            <i>{description}</i>
          </p>
        </>
      )}
    </aside>
  );
};

PodcastDetail.propTypes = {
  image: string,
  title: string,
  artist: string,
  description: string,
};

export default PodcastDetail;
