import React from 'react';
import { render } from '@testing-library/react';
import PodcastEpisodesTable from './PodcastEpisodesTable';
import { Episode } from '@App/model/Episodes';
import episodes from '@App/utils/tests/fixtures/episodes';

jest.mock('./PodcastEpisodesTableRow', () => () => (
  <div id="mockPodcastEpisodesTableRow">PodcastEpisodesTableRow</div>
));

describe('PodcastEpisodesTable unit tests', () => {
  it('should match snapshot', () => {
    const mockTable: Episode[] = episodes.results;
    const { asFragment } = render(
      <PodcastEpisodesTable podcasts={mockTable} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
