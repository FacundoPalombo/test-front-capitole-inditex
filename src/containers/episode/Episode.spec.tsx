import { renderWithMemoryRouter } from '@App/utils/tests/renderWithRouter';
import { getPodcastEpisodes, getPodcastChannels } from '@App/services/podcasts';

import episodesFixture from '@App/utils/tests/fixtures/episodes';
import channelsFixture from '@App/utils/tests/fixtures/channels';

jest.mock('@App/services/podcasts');

xdescribe('Episode integration test', () => {
  it.only('should render ok with props', async () => {
    (getPodcastEpisodes as jest.Mock).mockResolvedValue(episodesFixture);
    (getPodcastChannels as jest.Mock).mockResolvedValue(channelsFixture);
    const { getByRole, findByRole, findByTestId } = renderWithMemoryRouter({
      initialEntries: ['/podcast/1535809341/episode/1000652324873'],
    });

    await findByTestId('episode');

    const headingMatcher = 'Episode 716 | "Room 1108"';
    await findByRole('heading', { name: headingMatcher });
    expect(getByRole('heading', { name: headingMatcher })).toBeInTheDocument();
  });
});
