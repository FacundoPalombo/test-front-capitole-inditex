import React from 'react';
import { render } from '@testing-library/react';
import PodcastDetail from '../PodcastDetail';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ to, children }) => <a href={to}>{children}</a>,
  useParams: jest.fn().mockReturnValue({ podcastId: 1234 }),
}));

describe('PodcastDetail unit tests', () => {
  it('should match snapshot', () => {
    const { asFragment, getByRole } = render(
      <PodcastDetail
        image="imageMock.jpg"
        title="titleMock"
        artist="artistMock"
        description="descriptionMock"
      />
    );
    expect(asFragment()).toMatchSnapshot();
    const navigableComponent = getByRole('link', {
      name: 'titleMock titleMock by artistMock Description: descriptionMock',
    });
    expect(navigableComponent).toHaveAttribute('href', '/podcast/1234');
  });
});
