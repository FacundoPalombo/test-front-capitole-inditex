import React from 'react';
import { render } from '@testing-library/react';
import Channel from '../Channel';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe('Channel unit tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Channel
        image="imageMock"
        artist="artistMock"
        title="titleMock"
        podcastId="podcastIdMock"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
