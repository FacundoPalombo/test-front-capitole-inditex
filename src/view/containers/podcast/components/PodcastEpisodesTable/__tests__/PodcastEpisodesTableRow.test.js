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
});
