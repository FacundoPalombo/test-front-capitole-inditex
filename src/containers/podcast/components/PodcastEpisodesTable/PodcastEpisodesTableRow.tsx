import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { number, shape, string, arrayOf } from 'prop-types';
import { Episode } from '@App/model/Episodes';

type PodcastEpisodesTableRowProps = {
  trackId: number;
  trackName: string;
  releaseDate: string;
  trackTimeMillis: number;
};

const PodcastEpisodesTableRow = ({
  trackId,
  trackName,
  releaseDate,
  trackTimeMillis,
}: PodcastEpisodesTableRowProps) => {
  const trackMinutes = useMemo(
    () => (trackTimeMillis - (trackTimeMillis % 60000)) / 60000,
    [trackTimeMillis]
  );
  const trackSeconds = useMemo(
    () => ((trackTimeMillis % 60000) / 1000).toFixed(0),
    [trackTimeMillis]
  );
  const trackDateCreation = useMemo(
    () => new Date(releaseDate).toLocaleDateString(),
    [releaseDate]
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

PodcastEpisodesTableRow.propTypes = {
  podcasts: arrayOf(
    shape({
      trackId: number,
      trackName: string,
      releaseDate: string,
      trackTimeMillis: number,
    })
  ),
};

export default PodcastEpisodesTableRow;
