import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const PodcastEpisodesTableRow = ({
  trackId,
  trackName,
  releaseDate,
  trackTimeMillis,
}) => {
  const { trackMinutes, trackSeconds } = useMemo(
    () => ({
      trackMinutes: (trackTimeMillis - (trackTimeMillis % 60000)) / 60000,
      trackSeconds: ((trackTimeMillis % 60000) / 1000).toFixed(0),
    }),
    [trackTimeMillis]
  );

  const trackDateCreation = useMemo(
    () => new Date(releaseDate).toLocaleDateString(),
    [trackDateCreation]
  );

  return (
    <tr className={styles.table__row} key={trackId}>
      <th className={styles.table__row_item} align="left" headers="col-title">
        <Link to={`episode/${trackId}`} className={styles.table__row_link}>
          {trackName}
        </Link>
      </th>
      <th
        className={styles.table__row_item}
        align="right"
        style={{ textAlign: 'left' }}
        headers="col-date"
      >
        {trackDateCreation}
      </th>
      <th
        className={styles.table__row_item}
        align="right"
        style={{ textAlign: 'left' }}
        headers="col-duration"
      >
        {trackMinutes}
        min {trackSeconds}s
      </th>
    </tr>
  );
};

export default PodcastEpisodesTableRow;
