import { renderWithMemoryRouter } from '../../../../utils/tests/renderWithRouter';
import { getPodcast } from '../../../../services/podcast';
import podcastFixture, { fail as failFixture } from './podcast.fixture';

jest.mock('../../../../services/podcast');

describe('Podcast integration test', () => {
  afterAll(jest.clearAllMocks);
  it('should render ok when api call is correct', async () => {
    getPodcast.mockResolvedValueOnce(podcastFixture);
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
    await findByText('Episode');

    expect(getByText('Episode')).toBeInTheDocument();
  });
});
