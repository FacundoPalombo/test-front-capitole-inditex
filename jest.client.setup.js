/* eslint-disable react/react-in-jsx-scope, react/prop-types, react/display-name */
import React from 'react';
import '@testing-library/jest-dom';
import { enableFetchMocks } from 'jest-fetch-mock';

jest.mock('react-markdown', () => ({ children }) => (
  <div id="react-markdown-wrapper">{children}</div>
));

jest.mock('remark-gfm', () => jest.fn());

enableFetchMocks();

afterEach(() => {
  fetch.resetMocks();
});
