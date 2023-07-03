import React from 'react';
import { render } from '@testing-library/react';
import DetailSkeleton from '../DetailSkeleton';

jest.mock('../../../../utils/functions/randomSizer', () =>
  jest.fn().mockReturnValue(20)
);

describe('DetailSkeleton unit tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<DetailSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
