import { renderWithMemoryRouter } from '../../../../utils/tests/renderWithRouter';
import searchFixture from './podcastChannels.fixture';
import { getPodcastChannels } from '../../../../services/podcasts';

jest.mock('../../../../services/podcasts');

describe('Search integration tests', () => {
  it('should list channels by default', async () => {
    getPodcastChannels.mockResolvedValueOnce(searchFixture);
    const { getByRole, getByTestId, findByRole } = renderWithMemoryRouter();

    await findByRole('textbox', {
      name: 'Filter over all the 100 best podcasts on itunes.',
    });
    expect(getByTestId('search_box')).toBeInTheDocument();
    expect(
      getByRole('link', {
        name: 'The Joe Budden Podcast, Author: The Joe Budden Network',
      })
    ).toBeInTheDocument();
  });

  it('should list channels and handle search input filter', async () => {
    getPodcastChannels.mockResolvedValueOnce(searchFixture);
    const { getByRole, getAllByRole, getByTestId, findByRole, user } =
      renderWithMemoryRouter();

    await findByRole('textbox', {
      name: 'Filter over all the 100 best podcasts on itunes.',
    });
    const searchBoxInput = getByTestId('search_box');
    expect(searchBoxInput).toBeInTheDocument();
    expect(
      getByRole('link', {
        name: 'The Joe Budden Podcast, Author: The Joe Budden Network',
      })
    ).toBeInTheDocument();

    // The heading is a link too...
    expect(getAllByRole('link').length).toBeGreaterThan(2);
    // can use user.type too
    await user.click(searchBoxInput);
    await user.paste('The Joe Budden');
    // Just remains 2 links in page: "Podcaster" heading and the podcast The Joe Budden(...)
    expect(getAllByRole('link').length).toBe(2);
  });
});
