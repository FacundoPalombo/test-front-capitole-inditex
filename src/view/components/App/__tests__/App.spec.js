import React from 'react';

import App from '../App';
import { render, screen } from '@testing-library/react';

describe('App integration test', () => {
  it('should render ok with props', () => {
    render(<App example={42} />);
    expect(screen.getByText('Hello 42')).toBeInTheDocument();
  });
});
