import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Podcast, { loader as podcastLoader } from '../Podcast';
import channelsFixture from '../../search/__tests__/podcastChannels.fixture';
import episodesFixture from './podcastEpisodes.fixture';

import {
  channels as channelsQuery,
  episodes as episodesQuery,
} from '../../../../queries/podcasts';

import {
  getPodcastEpisodes,
  getPodcastChannels,
} from '../../../../services/podcast';

jest.mock('../components/PodcastDetail', () => (props) => (
  <div>PodcastDetail {JSON.stringify(props)}</div>
));

jest.mock('../../../../services/podcast');

jest.mock('../../../components/DetailSkeleton', () => () => (
  <div>DetailSkeleton</div>
));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ podcastId: 1234 }),
}));

describe('Podcast unit test', () => {
  it('should match snapshot when isFetching shows skeleton', async () => {
    const queryClient = new QueryClient({
      logger: {
        log: console.log,
        warn: console.warn,
        error: () => {},
      },
    });

    getPodcastChannels.mockResolvedValue(channelsFixture);
    getPodcastEpisodes.mockResolvedValue(episodesFixture);

    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <Podcast />
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

    getPodcastChannels.mockResolvedValue(channelsFixture);
    getPodcastEpisodes.mockResolvedValue(episodesFixture);

    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <Podcast />
      </QueryClientProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should resolve loader as pure function', async () => {
    const podcastId = 1234;
    const queryClientStub = {
      ensureQueryData: jest
        .fn()
        .mockImplementationOnce((query) => {
          expect(JSON.stringify(query)).toEqual(
            JSON.stringify(episodesQuery(podcastId))
          );
          return { data: 'ok' };
        })
        .mockImplementationOnce((query) => {
          expect(JSON.stringify(query)).toEqual(
            JSON.stringify(channelsQuery())
          );
          return { data: 'ok' };
        }),
    };

    const loader = await podcastLoader(queryClientStub)({
      params: { podcastId },
    });
    expect(loader).toEqual({
      channels: { data: 'ok' },
      episodes: { data: 'ok' },
    });
  });
});
