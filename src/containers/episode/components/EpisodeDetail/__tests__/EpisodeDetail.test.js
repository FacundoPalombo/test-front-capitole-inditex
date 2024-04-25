import React from 'react';
import { render } from '@testing-library/react';
import EpisodeDetail from '../EpisodeDetail';

jest.mock('../../Markdown', () => ({ children }) => (
  <div id="markdown">{children}</div>
));

describe('EpisodeDetail unit tests', () => {
  it('should match to snapshot', () => {
    const { asFragment } = render(
      <EpisodeDetail
        description="una descripcion de episodio"
        episodeUrl="http://google.com"
        trackName="One Metallica"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
