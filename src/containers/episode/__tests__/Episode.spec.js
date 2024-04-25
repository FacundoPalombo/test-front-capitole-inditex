import { renderWithMemoryRouter } from '@App/utils/tests/renderWithRouter';
import { getPodcastEpisodes, getPodcastChannels } from '@App/services/podcasts';

import episodesFixture from '@App/utils/tests/fixtures/episodes';
import channelsFixture from '@App/utils/tests/fixtures/channels';

jest.mock('@App/services/podcasts');

describe('Episode integration test', () => {
  it.only('should render ok with props', async () => {
    getPodcastEpisodes.mockReturnValue(episodesFixture);
    getPodcastChannels.mockReturnValue(channelsFixture);
    const { getByRole, findByRole } = renderWithMemoryRouter({
      initialEntries: ['/podcast/1535809341/episode/1000616377855'],
    });
    const headingMatcher = 'Episode 634 | "Guns & Buns"';
    await findByRole('heading', { name: headingMatcher });
    expect(getByRole('heading', { name: headingMatcher })).toBeInTheDocument();
  });
});
