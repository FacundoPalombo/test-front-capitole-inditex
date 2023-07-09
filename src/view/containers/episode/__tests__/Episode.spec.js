import { renderWithMemoryRouter } from '../../../../utils/tests/renderWithRouter';
import {
  getPodcastEpisodes,
  getPodcastChannels,
} from '../../../../services/podcasts';

import podcastFixture from '../../podcast/__tests__/podcastEpisodes.fixture';
import searchFixture from '../../search/__tests__/podcastChannels.fixture';

jest.mock('../../../../services/podcasts');

describe('Episode integration test', () => {
  it.only('should render ok with props', async () => {
    getPodcastEpisodes.mockReturnValue(podcastFixture);
    getPodcastChannels.mockReturnValue(searchFixture);
    const { getByRole, findByRole } = renderWithMemoryRouter({
      initialEntries: ['/podcast/1535809341/episode/1000616377855'],
    });
    const headingMatcher = 'Episode 634 | "Guns & Buns"';
    await findByRole('heading', { name: headingMatcher });
    expect(getByRole('heading', { name: headingMatcher })).toBeInTheDocument();
  });
});
