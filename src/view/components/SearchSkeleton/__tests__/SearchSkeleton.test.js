import React from 'react';
import { render } from '@testing-library/react';
import SearchSkeleton from '../SearchSkeleton.tsx';

jest.mock('@containers/search/components/Channel/Channel.jsx', () => () => (
  <div id="channel-mock">Hola, soy un item de channel</div>
));

describe('SearchSkeleton unit tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<SearchSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
