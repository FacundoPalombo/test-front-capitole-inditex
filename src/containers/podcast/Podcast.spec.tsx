import { renderWithMemoryRouter } from '@App/utils/tests/renderWithRouter';

import { getPodcastEpisodes, getPodcastChannels } from '@App/services/podcasts';

import episodesFixture from '@App/utils/tests/fixtures/episodes';
import failEpisodeFixture from '@App/utils/tests/fixtures/fail';
import channelsFixture from '@App/utils/tests/fixtures/channels';

jest.mock('@App/services/podcasts');

xdescribe('Podcast integration test', () => {
  afterEach(jest.clearAllMocks);
  it('should render ok when api call is correct', async () => {
    (getPodcastEpisodes as jest.Mock).mockResolvedValueOnce(episodesFixture);
    (getPodcastChannels as jest.Mock).mockResolvedValueOnce(channelsFixture);

    const { findByTestId, getByRole } = renderWithMemoryRouter({
      initialEntries: ['/podcast/1535809341'],
    });

    await findByTestId('podcast-detail');
    expect(
      getByRole('link', { name: 'Episode 638 | "Dudecast"' })
    ).toBeInTheDocument();
  });

  it('should render fail when api call is incorrect', async () => {
    (getPodcastEpisodes as jest.Mock).mockRejectedValueOnce(failEpisodeFixture);
    (getPodcastChannels as jest.Mock).mockRejectedValueOnce(failEpisodeFixture);

    const { findByText, getByText } = renderWithMemoryRouter({
      initialEntries: ['/podcast/1535809341'],
    });
    await findByText('Not Found');
    expect(getByText('Not Found')).toBeInTheDocument();
  });
});
