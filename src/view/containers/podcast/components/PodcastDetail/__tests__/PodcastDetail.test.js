import React from 'react';
import { render } from '@testing-library/react';
import PodcastDetail from '../PodcastDetail';

describe('PodcastDetail unit tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <PodcastDetail
        image="imageMock.jpg"
        title="titleMock"
        artist="artistMock"
        description="descriptionMock"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
