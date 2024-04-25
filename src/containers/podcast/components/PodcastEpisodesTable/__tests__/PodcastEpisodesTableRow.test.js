import React from 'react';
import { render } from '@testing-library/react';
import PodcastEpisodesTableRow from '../PodcastEpisodesTableRow';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe('PodcastEpisodesTableRow unit tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<PodcastEpisodesTableRow />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should build correct compoent with correct links and times', () => {
    const { getByRole } = render(
      <PodcastEpisodesTableRow
        trackId={12324}
        trackName="A la santa catalina chibirin chibirin bombom"
        releaseDate="2023-06-24T00:00:00-07:00"
        trackTimeMillis={3600 * 1000 + 2000}
      />
    );
    const link = getByRole('link', {
      name: 'A la santa catalina chibirin chibirin bombom',
    });

    expect(link).toHaveAttribute('href', 'episode/12324');

    const tableItemReleaseDate = getByRole('row', {
      name: 'A la santa catalina chibirin chibirin bombom 24/6/2023 60min 2s',
    });
    expect(tableItemReleaseDate).toBeInTheDocument();
  });
});
