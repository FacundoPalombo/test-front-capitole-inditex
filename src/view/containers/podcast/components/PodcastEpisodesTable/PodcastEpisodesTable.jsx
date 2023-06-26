import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const PodcastEpisodesTable = ({ podcasts }) => {
  return (
    <div className={styles.table__container}>
      <table className={styles.table}>
        <thead className={styles.table__header}>
          <tr>
            <th
              className={styles.table__title}
              itemScope="col"
              align="left"
              id="col-title"
            >
              Title
            </th>
            <th
              className={styles.table__title}
              align="right"
              itemScope="col"
              style={{ textAlign: 'left' }}
              id="col-date"
            >
              Date
            </th>
            <th
              className={styles.table__title}
              align="right"
              itemScope="col"
              style={{ textAlign: 'left' }}
              id="col-duration"
            >
              Duration
            </th>
          </tr>
        </thead>
        <tbody className={styles.table__body}>
          {podcasts.map((episode) => (
            <tr className={styles.table__row} key={episode.trackId}>
              <th
                className={styles.table__row_item}
                align="left"
                headers="col-title"
              >
                <Link
                  to={`episode/${episode.trackId}`}
                  className={styles.table__row_link}
                >
                  {episode.trackName}
                </Link>
              </th>
              <th
                className={styles.table__row_item}
                align="right"
                style={{ textAlign: 'left' }}
                headers="col-date"
              >
                {new Date(episode.releaseDate).toLocaleDateString()}
              </th>
              <th
                className={styles.table__row_item}
                align="right"
                style={{ textAlign: 'left' }}
                headers="col-duration"
              >
                {(episode.trackTimeMillis - (episode.trackTimeMillis % 60000)) /
                  60000}
                min {((episode.trackTimeMillis % 60000) / 1000).toFixed(0)}s
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PodcastEpisodesTable;
