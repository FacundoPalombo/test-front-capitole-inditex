import React from 'react';
import { render } from '@testing-library/react';
import SearchBox from '../SearchBox';

describe('SearchBox unit tests', () => {
  it('should match snapshot', () => {
    const { asFragment: snap1 } = render(
      <SearchBox onChange={jest.fn()} value="123" resultsCount={2} />
    );
    expect(snap1()).toMatchSnapshot();

    const { asFragment: snap2 } = render(
      <SearchBox onChange={jest.fn()} value="321" />
    );
    expect(snap2()).toMatchSnapshot();
  });
});
