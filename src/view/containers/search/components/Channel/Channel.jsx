import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { string } from 'prop-types';

const Channel = ({ image, artist, title, podcastId }) => {
  return (
    <Link
      aria-label={`${title}, Author: ${artist}`}
      to={`podcast/${podcastId}`}
      className={styles.channel__container}
    >
      <div className={styles.channel__card}>
        <img
          className={styles.channel__picture}
          alt={title}
          src={image}
          loading="lazy"
        />
        <h3 className={styles.channel__title}>{title}</h3>
        <p className={styles.channel__artist}>Author: {artist}</p>
      </div>
    </Link>
  );
};

Channel.propTypes = {
  image: string,
  artist: string,
  title: string,
  podcastId: string,
};

export default memo(Channel);
