import React from 'react';
import { render } from '@testing-library/react';
import PodcastEpisodesTable from '../PodcastEpisodesTable';

jest.mock('../PodcastEpisodesTableRow', () => () => (
  <div id="mockPodcastEpisodesTableRow">PodcastEpisodesTableRow</div>
));

describe('PodcastEpisodesTable unit tests', () => {
  it('should match snapshot', () => {
    const mockTable = [
      {
        key: 'keyMock',
        trackId: 'trackIdMock',
        trackName: 'trackNameMock',
        releaseDate: 'releaseDateMock',
        trackTimeMillis: 'trackTimeMillisMock',
      },
    ];
    const { asFragment } = render(
      <PodcastEpisodesTable podcasts={mockTable} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
