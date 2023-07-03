import URL, {
  GET_PODCAST_EPISODES,
  GET_PODCAST_CHANNELS,
} from '../../utils/constants/URL';
import { getPodcastEpisodes, getPodcastChannels } from '../podcast';

describe('getPodcastEpisodes service unit test', () => {
  afterEach(jest.clearAllMocks);

  it('should return promise ok when api call is successfull', async () => {
    const mockResponse = {
      content: 'mock',
    };

    fetch.mockResponseOnce(
      JSON.stringify({
        ok: true,
        contents: JSON.stringify(mockResponse),
      })
    );

    const params = { podcastId: '1234' };

    const response = await getPodcastEpisodes(params);

    const expectedRequest = new Request(URL[GET_PODCAST_EPISODES](params));

    expect(fetch).toHaveBeenCalledWith(expectedRequest);
    expect(response).toEqual(mockResponse);
  });

  it('should return promise fail when api call fails', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      })
    );
    try {
      const params = { podcastId: '1234' };

      await getPodcastEpisodes(params);

      const expectedRequest = new Request(URL[GET_PODCAST_EPISODES](params));

      expect(fetch).toHaveBeenCalledWith(expectedRequest);
    } catch (error) {
      expect(error.message).toEqual('Error processing the request: Not Found');
    }
  });
});

describe('getPodcastChannels service unit test', () => {
  afterEach(jest.clearAllMocks);

  it('should return promise ok when api call is successfull', async () => {
    const mockResponse = {
      content: 'mock',
    };

    fetch.mockResponseOnce(
      JSON.stringify({
        ok: true,
        contents: JSON.stringify(mockResponse),
      })
    );

    const response = await getPodcastChannels();

    const expectedRequest = new Request(URL[GET_PODCAST_CHANNELS]);

    expect(fetch).toHaveBeenCalledWith(expectedRequest);
    expect(response).toEqual(mockResponse);
  });

  it('should return promise fail when api call fails', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      })
    );
    try {
      await getPodcastChannels();

      const expectedRequest = new Request(URL[GET_PODCAST_CHANNELS]);

      expect(fetch).toHaveBeenCalledWith(expectedRequest);
    } catch (error) {
      expect(error.message).toEqual('Error processing the request: Not Found');
    }
  });
});
