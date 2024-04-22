import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App';

const $root: HTMLElement = document.getElementById('root')!;

const root = createRoot($root);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
