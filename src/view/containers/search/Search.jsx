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

  const channelsFiltered = channels.feed.entry.filter(
    (channel) =>
      channel['im:artist']?.label
        .toLowerCase()
        ?.includes(searchValue.toLowerCase().trim()) ||
      channel['im:name']?.label
        .toLowerCase()
        ?.includes(searchValue.toLowerCase().trim())
  );

  const resultsCount = channelsFiltered?.length;

  const renderChannels = () =>
    channelsFiltered.map((channel) => {
      const podcastId = channel.id.attributes['im:id'];
      const image = channel['im:image'].at(-1).label;
      const artist = channel['im:artist'].label;
      const title = channel['im:name'].label;
      return (
        <Channel
          key={podcastId}
          podcastId={podcastId}
          image={image}
          artist={artist}
          title={title}
        />
      );
    });

  return (
    <section
      id="search"
      data-testid="search"
      className={styles.search__container}
    >
      <SearchBox
        onChange={handleSearchBox}
        value={searchValue}
        resultsCount={resultsCount}
      />
      {renderChannels()}
    </section>
  );
};

export async function loader() {
  const channels = await getPodcastChannels();
  return { channels };
}

export default Search;
