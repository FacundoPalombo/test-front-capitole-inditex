import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';
import PodcastEpisodesTableRow from './PodcastEpisodesTableRow';

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
            <PodcastEpisodesTableRow
              key={episode.trackId}
              trackId={episode.trackId}
              trackName={episode.trackName}
              releaseDate={episode.releaseDate}
              trackTimeMillis={episode.trackTimeMillis}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

PodcastEpisodesTable.propTypes = {
  podcasts: PropTypes.shape({
    map: PropTypes.func,
  }),
};

export default PodcastEpisodesTable;
