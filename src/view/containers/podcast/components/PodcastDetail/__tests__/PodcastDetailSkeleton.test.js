import React from 'react';
import { render } from '@testing-library/react';
import PodcastDetailSkeleton from '../PodcastDetailSkeleton';

describe('PodcastDetailSkeleton unit test', () => {
  afterAll(jest.clearAllMocks);
  it('should render skeleton ok', () => {
    const { asFragment } = render(<PodcastDetailSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
