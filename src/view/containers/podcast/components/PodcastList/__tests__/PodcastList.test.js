import React from 'react';
import { render } from '@testing-library/react';
import PodcastList from '../PodcastList';

jest.mock('../../Results', () => () => <div id="mockResults">Results</div>);
jest.mock('../../PodcastEpisodesTable', () => () => (
  <div id="mockPodcastEpisodesTable">PodcastEpisodesTable</div>
));

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn().mockReturnValue({ data: { data: 'mockData' } }),
}));

describe('PodcastList unit tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<PodcastList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
