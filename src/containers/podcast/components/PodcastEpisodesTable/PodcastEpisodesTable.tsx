import { number, shape, string, arrayOf } from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';
import PodcastEpisodesTableRow from './PodcastEpisodesTableRow';
import { Episode } from '@utils/types/Episodes';

type PodcastEpisodesTableProps = {
  podcasts: Episode[];
};

const PodcastEpisodesTable = ({ podcasts }: PodcastEpisodesTableProps) => {
  return (
    <div className={styles.table__container}>
      <table className={styles.table}>
        <thead className={styles.table__header}>
          <tr>
            <th className={styles.table__title} align="left" id="col-title">
              Title
            </th>
            <th
              className={styles.table__title}
              align="right"
              style={{ textAlign: 'left' }}
              id="col-date"
            >
              Date
            </th>
            <th
              className={styles.table__title}
              align="right"
              style={{ textAlign: 'left' }}
              id="col-duration"
            >
              Duration
            </th>
          </tr>
        </thead>
        <tbody className={styles.table__body}>
          {podcasts?.map((episode) => (
            <PodcastEpisodesTableRow
              key={episode.trackId!}
              trackId={episode.trackId!}
              trackName={episode.trackName!}
              releaseDate={episode.releaseDate!}
              trackTimeMillis={episode.trackTimeMillis!}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

PodcastEpisodesTable.propTypes = {
  podcasts: arrayOf(
    shape({
      trackId: number,
      trackName: string,
      releaseDate: string,
      trackTimeMillis: number,
    })
  ),
};

export default PodcastEpisodesTable;
