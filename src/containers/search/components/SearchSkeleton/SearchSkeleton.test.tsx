import React from 'react';
import { render } from '@testing-library/react';
import SearchSkeleton from './SearchSkeleton';

jest.mock('../Channel/Channel', () => () => (
  <div id="channel-mock">Hola, soy un item de channel</div>
));

describe('SearchSkeleton unit tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<SearchSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
