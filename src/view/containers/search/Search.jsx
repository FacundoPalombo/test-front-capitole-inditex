import React, { useCallback, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getSongs } from '../../../services/songs';
import Song from './components/Song';
import styles from './styles.module.scss';
import SearchBox from './components/SearchBox';

const Search = () => {
  const { songs } = useLoaderData();
  const [searchValue, setSearchValue] = useState('');
  const handleSearchBox = useCallback((e) => setSearchValue(e.target.value));

  return (
    <section id="search" className={styles.search__container}>
      <SearchBox onChange={handleSearchBox} value={searchValue} />
      {songs.feed.entry
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
            image={song['im:image'].at(-1).label}
            artist={song['im:artist'].label}
            title={song['im:name'].label}
          />
        ))}
    </section>
  );
};

export async function loader() {
  const songs = await getSongs();
  return { songs };
}

export default Search;
