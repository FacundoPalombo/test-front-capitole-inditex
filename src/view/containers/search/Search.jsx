import React, { useState } from 'react';
import { useLoaderData, Await, defer } from 'react-router-dom';
import { getSongs } from '../../../services/songs';
import Song from './components/Song';
import styles from './styles.module.scss';
import SearchBox from './components/SearchBox';

const Search = () => {
  const { songs } = useLoaderData();
  const [searchValue, setSearchValue] = useState('');

  function renderComponent(songs) {
    return (
      <section id="search" className={styles.search__container}>
        <SearchBox
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
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
    );
  }
  return (
    <React.Suspense fallback={<section>loading</section>}>
      <Await
        resolve={songs}
        errorElement={<div>Ups! An errror ocurred fetching songs</div>}
      >
        {renderComponent}
      </Await>
    </React.Suspense>
  );
};

export function loader() {
  const songs = getSongs();
  return defer({ songs });
}

export default Search;
