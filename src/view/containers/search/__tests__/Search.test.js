import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import dataFixture from './podcastChannels.fixture';
import { channels as channelsQuery } from '../../../../queries/podcasts';
import Search, { loader as searchLoader } from '../Search';
import { getPodcastChannels } from '../../../../services/podcast';

jest.mock('../components/Channel', () => (props) => (
  <div>Channel{JSON.stringify(props)}</div>
));
jest.mock('../components/SearchBox', () => (props) => (
  <div>SearchBox {JSON.stringify(props)}</div>
));

jest.mock('../../../components/SearchSkeleton', () => () => (
  <div>SearchSkeleton</div>
));

jest.mock('../../../../services/podcast');

describe('Search unit test', () => {
  it('should match snapshot when isFetching shows skeleton', () => {
    const queryClient = new QueryClient({
      logger: {
        log: console.log,
        warn: console.warn,
        error: () => {},
      },
    });
    getPodcastChannels.mockResolvedValue(dataFixture);
    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <Search />
      </QueryClientProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should match snapshot when data is provided', async () => {
    const queryClient = new QueryClient({
      logger: {
        log: console.log,
        warn: console.warn,
        error: () => {},
      },
    });
    getPodcastChannels.mockResolvedValue(dataFixture);
    const { asFragment, findByText } = render(
      <QueryClientProvider client={queryClient}>
        <Search />
      </QueryClientProvider>
    );
    await findByText(`SearchBox {"value":"","resultsCount":9}`);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should resolve loader as pure function', async () => {
    const queryClientStub = {
      ensureQueryData: jest.fn().mockImplementationOnce((query) => {
        expect(query).toEqual(channelsQuery());
        return { data: 'ok' };
      }),
    };

    const loader = await searchLoader(queryClientStub)();
    expect(loader).toEqual({ data: 'ok' });
  });
});
