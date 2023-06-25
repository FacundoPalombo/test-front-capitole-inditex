import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Song = ({ image, artist, title, podcastId }) => {
  return (
    <Link to={`podcast/${podcastId}`} className={styles.song__container}>
      <div className={styles.song__card}>
        <img className={styles.song__picture} alt={title} src={image} />
        <h3 className={styles.song__title}>{title}</h3>
        <p className={styles.song__artist}>Author: {artist}</p>
      </div>
    </Link>
  );
};

export default Song;
