import { renderWithMemoryRouter } from '@App/utils/tests/renderWithRouter';
import { getPodcastChannels, getPodcastEpisodes } from '@App/services/podcasts';
import channelsFixture from '@App/utils/tests/fixtures/channels';
import episodesFixture from '@App/utils/tests/fixtures/episodes';

jest.mock('@App/services/podcasts');

xdescribe('App Full Integration Test', () => {
  afterEach(jest.clearAllMocks);
  it.only('Should navigate between all pages', async () => {
    (getPodcastChannels as jest.Mock).mockResolvedValue(channelsFixture);
    (getPodcastEpisodes as jest.Mock).mockResolvedValue(episodesFixture);

    const {
      user,
      getByRole,
      findByLabelText,
      findByRole,
      getByLabelText,
      getAllByRole,
      queryByRole,
    } = renderWithMemoryRouter({ initialEntries: ['/'] });

    //wait until page loads and show input
    await findByRole('textbox', {
      name: 'Filter over all the 100 best podcasts on itunes.',
    });
    // see if another podcast is already rendered, different to the click and filtered
    expect(
      getByRole('link', {
        name: 'Friday Night Karaoke, Author: Friday Night Karaoke',
      })
    ).toBeInTheDocument();
    const inputSearch = getByRole('textbox', {
      name: 'Filter over all the 100 best podcasts on itunes.',
    });
    //try to filter by podcast channel title
    await user.click(inputSearch);
    await user.paste('This Little Light');
    // should be the podcast and header link
    expect(getAllByRole('link').length).toEqual(2);
    //assert filter ok
    expect(
      getByRole('link', {
        name: 'This Little Light, Author: Cadence13 and Parallel',
      })
    ).toBeInTheDocument();
    // assert filter ok, not showing another channels
    expect(
      queryByRole('link', {
        name: 'Friday Night Karaoke, Author: Friday Night Karaoke',
      })
    ).toBeFalsy();
    await user.clear(inputSearch);
    // new assert of filtering by Author Name.
    await user.type(inputSearch, 'Clay');
    expect(getAllByRole('link').length).toEqual(2);
    const channelAssert = getByLabelText(
      'New Rory & MAL, Author: Rory Farrell & Jamil "Mal" Clay'
    );
    expect(channelAssert).toBeInTheDocument();
    await user.click(channelAssert);
    // assert go to the podcast view
    await findByRole('heading', { name: 'Episodes: 21' });
    const episodeAssert = getByRole('link', {
      name: 'Episode 177 | Young Thug & Gunna’s Combined Roll Out',
    });
    expect(episodeAssert).toBeInTheDocument();
    //assert go to the episode view
    await user.click(episodeAssert);
    await findByLabelText(
      'audio:Episode 177 | Young Thug & Gunna’s Combined Roll Out'
    );
    // assert if audio component is rendered
    const audioComponent = getByLabelText(
      'audio:Episode 177 | Young Thug & Gunna’s Combined Roll Out'
    );
    expect(audioComponent).toBeInTheDocument();
    // assert go back to podcasts view detail
    const backToPodcast = getByLabelText('Go back to podcast detail page.');
    await user.click(backToPodcast);
    await findByRole('link', {
      name: 'Episode 177 | Young Thug & Gunna’s Combined Roll Out',
    });
    expect(audioComponent).not.toBeInTheDocument();
    // assert show table list of episodes
    expect(
      getByRole('link', {
        name: 'Episode 177 | Young Thug & Gunna’s Combined Roll Out',
      })
    ).toBeInTheDocument();
    await findByRole('heading', { name: 'Podcaster' });

    // assert back to home returns to the main page
    await user.click(getByRole('link', { name: 'Go back to home' }));

    await findByRole('link', { name: 'Caresha Please, Author: REVOLT' });

    expect(
      getByLabelText('Filter over all the 100 best podcasts on itunes.')
    ).toBeInTheDocument();

    expect(
      getByRole('link', { name: 'Caresha Please, Author: REVOLT' })
    ).toBeInTheDocument();
  });
});
