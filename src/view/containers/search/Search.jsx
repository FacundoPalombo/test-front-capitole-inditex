import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getSongs } from '../../../services/songs';
import Song from '../../components/Song';
import styles from './styles.module.scss';
const Search = () => {
  const songs = useLoaderData();
  const [searchValue, setSearchValue] = useState('');

  console.log(songs);
  return songs?.feed?.entry?.length ? (
    <section id="search" className={styles.search__container}>
      <span className={styles.search__searchBox}>
        <label
          htmlFor="searchBox"
          aria-label="Filter over all the 100 best podcasts on itunes."
          className={styles.search__searchBoxLabel}
        >
          100
        </label>
        <input
          placeholder="Filter podcasts..."
          id="searchBox"
          name="searchBox"
          type="text"
          className={styles.search__searchBoxInput}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </span>
      {searchValue.length > 0
        ? songs.feed.entry
            .filter(
              (song) =>
                song['im:artist']?.label
                  .toLowerCase()
                  ?.includes(searchValue.toLowerCase().trim()) ||
                song['im:name']?.label
                  .toLowerCase()
                  ?.includes(searchValue.toLowerCase().trim())
            )
            .map((song) => (
              <Song
                key={song.id.attributes['im:id']}
                podcastId={song.id.attributes['im:id']}
                image={song['im:image'].at(0).label}
                artist={song['im:artist'].label}
                title={song['im:name'].label}
              />
            ))
        : songs.feed.entry.map((song) => (
            <Song
              key={song.id.attributes['im:id']}
              podcastId={song.id.attributes['im:id']}
              image={song['im:image'].at(0).label}
              artist={song['im:artist'].label}
              title={song['im:name'].label}
            />
          ))}
    </section>
  ) : (
    <section>loading</section>
  );
};

export function loader() {
  return getSongs();
}

export default Search;
