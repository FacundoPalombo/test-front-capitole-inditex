import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { string } from 'prop-types';

const Song = ({ image, artist, title, podcastId, skeleton }) => {
  return (
    <Link
      aria-label={`${title}, Author: ${artist}`}
      to={skeleton ? '/' : `podcast/${podcastId}`}
      className={styles.song__container}
      style={
        skeleton && {
          cursor: 'none',
          pointerEvents: 'none',
          color: '#aaa',
          transition: 'filter .23s ease-in-out',
        }
      }
    >
      <div className={styles.song__card}>
        <img className={styles.song__picture} alt={title} src={image} />
        <h3 className={styles.song__title}>{title}</h3>
        <p className={styles.song__artist}>Author: {artist}</p>
      </div>
    </Link>
  );
};

Song.propTypes = {
  image: string,
  artist: string,
  title: string,
  podcastId: string,
};

export default Song;
