import React from 'react';
import { render } from '@testing-library/react';
import PodcastDetailSkeleton from '../PodcastDetailSkeleton';

jest.mock('@App/utils/functions/randomSizer', () =>
  jest.fn().mockReturnValue(20)
);

describe('PodcastDetailSkeleton unit tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<PodcastDetailSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
