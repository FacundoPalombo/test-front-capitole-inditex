import React from 'react';
import { render } from '@testing-library/react';
import Markdown from '../Markdown';

jest.mock('react-markdown', () => ({ children }) => (
  <div id="react-markdown-wrapper">{children}</div>
));

jest.mock('remark-gfm', () => jest.fn());

describe('Markdown unit tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Markdown>
        <div id="markdown-children">Hola mundo estoy dentro de markdown</div>
      </Markdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
