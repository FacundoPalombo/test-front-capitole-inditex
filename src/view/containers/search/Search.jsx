import React, { useCallback, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getPodcastChannels } from '../../../services/podcast';
import Channel from './components/Channel';
import styles from './styles.module.scss';
import SearchBox from './components/SearchBox';

const Search = () => {
  const { channels } = useLoaderData();
  const [searchValue, setSearchValue] = useState('');
  const handleSearchBox = useCallback((e) => setSearchValue(e.target.value));

  return (
    <section id="search" className={styles.search__container}>
      <SearchBox onChange={handleSearchBox} value={searchValue} />
      {channels.feed.entry
        .filter(
          (channel) =>
            channel['im:artist']?.label
              .toLowerCase()
              ?.includes(searchValue.toLowerCase().trim()) ||
            channel['im:name']?.label
              .toLowerCase()
              ?.includes(searchValue.toLowerCase().trim())
        )
        .map((channel) => (
          <Channel
            key={channel.id.attributes['im:id']}
            podcastId={channel.id.attributes['im:id']}
            image={channel['im:image'].at(-1).label}
            artist={channel['im:artist'].label}
            title={channel['im:name'].label}
          />
        ))}
    </section>
  );
};

export async function loader() {
  const channels = await getPodcastChannels();
  return { channels };
}

export default Search;
