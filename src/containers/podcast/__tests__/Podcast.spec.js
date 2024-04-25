import { renderWithMemoryRouter } from '../../../utils/tests/renderWithRouter';
import {
  getPodcastEpisodes,
  getPodcastChannels,
} from '../../../services/podcasts';

import podcastFixture, { fail as failFixture } from './podcastEpisodes.fixture';
import podcastChannels from '../search/__tests__/podcastChannels.fixture';

jest.mock('../../../services/podcasts');

describe('Podcast integration test', () => {
  afterEach(jest.clearAllMocks);
  it('should render ok when api call is correct', async () => {
    getPodcastEpisodes.mockResolvedValueOnce(podcastFixture);
    getPodcastChannels.mockResolvedValueOnce(podcastChannels);

    const { findByTestId, getByRole } = renderWithMemoryRouter({
      initialEntries: ['/podcast/1535809341'],
    });

    await findByTestId('podcast-detail');
    expect(
      getByRole('link', { name: 'Episode 638 | "Dudecast"' })
    ).toBeInTheDocument();
  });

  it('should render fail when api call is incorrect', async () => {
    getPodcastEpisodes.mockRejectedValueOnce(failFixture);
    getPodcastChannels.mockRejectedValueOnce(failFixture);

    const { findByText, getByText } = renderWithMemoryRouter({
      initialEntries: ['/podcast/1535809341'],
    });
    await findByText('Not Found');
    expect(getByText('Not Found')).toBeInTheDocument();
  });
});
