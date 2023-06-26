import { renderWithMemoryRouter } from '../../../../utils/tests/renderWithRouter';
import { getPodcast } from '../../../../services/podcast';
import { getSongs } from '../../../../services/songs';
import podcastFixture, { fail as failFixture } from './podcast.fixture';
import songsFixture from '../../search/__tests__/search.fixture';

jest.mock('../../../../services/podcast');
jest.mock('../../../../services/songs');

describe('Podcast integration test', () => {
  afterAll(jest.clearAllMocks);
  it('should render ok when api call is correct', async () => {
    getPodcast.mockResolvedValueOnce(podcastFixture);
    getSongs.mockResolvedValueOnce(songsFixture);

    const { findByTestId, getByRole } = renderWithMemoryRouter({
      initialEntries: ['/podcast/1535809341'],
    });

    await findByTestId('podcast-detail');
    expect(
      getByRole('link', { name: 'Episode 638 | "Dudecast"' })
    ).toBeInTheDocument();
  });

  it('should render fail when api call is incorrect', async () => {
    getPodcast.mockRejectedValueOnce(failFixture);
    const { findByText, getByText } = renderWithMemoryRouter({
      initialEntries: ['/podcast/1535809341'],
    });
    await findByText('ups! error');
    expect(getByText('ups! error')).toBeInTheDocument();
  });

  it('should navigate between pages', async () => {
    getPodcast.mockResolvedValueOnce(podcastFixture);
    getSongs.mockResolvedValueOnce(songsFixture);

    const { findByTestId, findByText, getByText, getByRole, user } =
      renderWithMemoryRouter({
        initialEntries: ['/podcast/1535809341'],
      });
    await findByTestId('podcast-detail');

    const linkToPodcast = getByRole('link', {
      name: 'Episode 638 | "Dudecast"',
    });
    expect(linkToPodcast).toBeInTheDocument();

    await user.click(linkToPodcast);
    await findByText('Episode: Episode 638 | "Dudecast');

    expect(getByText('Episode: Episode 638 | "Dudecast')).toBeInTheDocument();
  });
});
