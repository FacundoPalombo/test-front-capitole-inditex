import React from 'react';
import { render } from '@testing-library/react';
import EpisodeDetailSkeleton from './EpisodeDetailSkeleton';

jest.mock('@App/utils/functions/randomSizer', () =>
  jest.fn().mockReturnValue(20)
);

describe('EpisodeDetailSkeleton unit tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<EpisodeDetailSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
