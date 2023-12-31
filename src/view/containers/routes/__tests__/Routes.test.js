import Routes from '../Routes';

//mock components

jest.mock('../Error', () => jest.fn());
jest.mock('../../main', () => jest.fn());
jest.mock('../../episode', () => jest.fn());
jest.mock('../../podcast/components/PodcastList/PodcastList', () => jest.fn());
jest.mock('../../podcast', () => {
  return {
    __esModules: true,
    default: jest.fn(),
    loader: jest.fn(),
  };
});
jest.mock('../../search', () => {
  return {
    __esModules: true,
    default: jest.fn(),
    loader: jest.fn(),
  };
});

jest.mock('@tanstack/react-query');

describe('Routes unit tests', () => {
  it('should return the expected routes', () => {
    const routes = Routes;

    expect(routes).toMatchSnapshot();
  });
});
