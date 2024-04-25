import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import episodesFixture from '../../podcast/__tests__/podcastEpisodes.fixture';
import Episode from '../Episode';
import { getPodcastEpisodes } from '@App/services/podcasts';
import noop from '@utils/noop';

jest.mock('../components/EpisodeDetail', () => (props) => (
  <div id="episode-detail">{JSON.stringify(props)}</div>
));

jest.mock(
  '../components/EpisodeDetailSkeleton/EpisodeDetailSkeleton',
  () => () => <div>DetailSkeleton</div>
);

jest.mock('@App/services/podcasts');

jest.mock('react-router-dom', () => ({
  useParams: jest
    .fn()
    .mockResolvedValue({ episodeId: '1000617803512', podcastId: '1535844019' }),
}));

describe('Episode unit test', () => {
  it('should match snapshot when isFetching shows skeleton', () => {
    const queryClient = new QueryClient({
      logger: {
        log: console.log,
        warn: console.warn,
        error: noop,
      },
    });
    getPodcastEpisodes.mockResolvedValue(episodesFixture);
    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <Episode />
      </QueryClientProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should match snapshot when data is provided', async () => {
    const queryClient = new QueryClient({
      logger: {
        log: console.log,
        warn: console.warn,
        error: noop,
      },
    });
    getPodcastEpisodes.mockResolvedValue(episodesFixture);
    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <Episode />
      </QueryClientProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
