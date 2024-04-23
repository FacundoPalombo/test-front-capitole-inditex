import { createRoot } from 'react-dom/client';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn().mockImplementation(() => ({ render: jest.fn() })),
}));

jest.mock('../containers/App/App.tsx', () => () => 'MyComponent');

import '../index.tsx';

describe('root render unit test', () => {
  afterAll(jest.clearAllMocks);

  it('should call react-dom correctly', () => {
    expect(createRoot).toHaveBeenCalledTimes(1);
  });
});
