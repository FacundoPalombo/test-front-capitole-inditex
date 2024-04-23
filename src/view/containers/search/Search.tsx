import React, { useCallback, useState } from 'react';
import Channel from './components/Channel/Channel';
import styles from './styles.module.scss';
import SearchBox from './components/SearchBox/SearchBox';
import { channels as channelsQuery } from '@App/queries/podcasts';
import { useIsFetching, useQuery } from '@tanstack/react-query';
import SearchSkeleton from '@components/SearchSkeleton/SearchSkeleton';

const Search = () => {
  const { data: channels } = useQuery(channelsQuery());
  const [searchValue, setSearchValue] = useState('');
  const handleSearchBox = useCallback(
    (e) => setSearchValue(e.target.value),
    [searchValue]
  );

  const isLoading = useIsFetching() > 0;

  const channelsFiltered = channels?.feed?.entry?.filter(
    (channel) =>
      channel['im:artist'].label
        ?.toLowerCase()
        .includes(searchValue.toLowerCase().trim())! ||
      channel['im:name']?.label
        ?.toLowerCase()
        .includes(searchValue.toLowerCase().trim())
  );

  const resultsCount = channelsFiltered?.length;

  const renderChannels = () =>
    channelsFiltered?.map((channel) => {
      const podcastId = channel?.id?.attributes['im:id'];
      const image = channel['im:image']?.at(-1)?.label!;
      const artist = channel['im:artist'].label;
      const title = channel['im:name']?.label;
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

  if (isLoading) return <SearchSkeleton />;
  return (
    channels && (
      <section
        id="search"
        data-testid="search"
        className={styles.search__container}
      >
        <SearchBox
          onChange={handleSearchBox}
          value={searchValue}
          resultsCount={resultsCount!}
        />
        {renderChannels()}
      </section>
    )
  );
};

export const loader = (queryClient) => async () => {
  const query = channelsQuery();
  const channels = await queryClient.ensureQueryData(query);
  return channels;
};

export default Search;
