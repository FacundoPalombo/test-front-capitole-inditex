import { renderWithMemoryRouter } from '../../../../utils/tests/renderWithRouter';
import searchFixture from './search.fixture';
import { getSongs } from '../../../../services/songs';

jest.mock('../../../../services/songs');

describe('Search integration tests', () => {
  it('should list songs by default', async () => {
    getSongs.mockResolvedValueOnce(searchFixture);
    const { getByRole, getByTestId, findByRole } = renderWithMemoryRouter();

    await findByRole('textbox', {
      name: 'Filter over all the 100 best podcasts on itunes.',
    });
    expect(getByTestId('search_box')).toBeInTheDocument();
    expect(
      getByRole('link', {
        name: 'The Joe Budden Podcast, Author: The Joe Budden Network',
      })
    );
  });
});
