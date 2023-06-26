import React from 'react';
import { render } from '@testing-library/react';
import SearchSkeleton from '../SearchSkeleton';

// eslint-disable-next-line react/display-name
jest.mock('../../Song', () => () => <div>SongComponentMock</div>);

describe('SearchSkeleton unit test', () => {
  afterAll(jest.clearAllMocks);
  it('should render skeleton ok', () => {
    const { asFragment } = render(<SearchSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
