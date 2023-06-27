import React from 'react';
import { renderWithMemoryRouter } from '../../../../utils/tests/renderWithRouter';
import {
  getPodcastEpisodes,
  getPodcastChannels,
} from '../../../../services/podcast';

import podcastFixture from '../../podcast/__tests__/podcastEpisodes.fixture';
import searchFixture from '../../search/__tests__/podcastChannels.fixture';

jest.mock('../../../../services/podcast');

describe('Episode integration test', () => {
  it.only('should render ok with props', () => {
    getPodcastEpisodes.mockReturnValueOnce(podcastFixture);
    getPodcastChannels.mockReturnValueOnce(searchFixture);
    const { user, getByRole, findByRole } = renderWithMemoryRouter([
      '/podcast/1535809341/episode/1000616377855',
    ]);
    const titleMatcher = 'Episode 634 | "Guns & Buns"';
  });
});
