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
  it('should build channel component with correct path', () => {
    const { getByRole } = render(
      <Channel
        image="imageMock"
        artist="Cosme Fulanito"
        title="El bar de Moe"
        podcastId="42"
      />
    );
    expect(
      getByRole('link', {
        name: 'El bar de Moe El bar de Moe Author: Cosme Fulanito',
      })
    ).toHaveAttribute('href', 'podcast/42');
  });
});
