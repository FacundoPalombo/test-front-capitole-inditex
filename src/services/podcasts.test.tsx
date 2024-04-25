import { GET_PODCAST, GET_PODCASTS } from '@App/utils/constants/URL';
import { getPodcastEpisodes, getPodcastChannels } from './podcasts';
import { FetchMock } from 'jest-fetch-mock';

describe('getPodcastEpisodes service unit test', () => {
  afterEach(jest.clearAllMocks);

  it('should return promise ok when api call is successfull', async () => {
    const mockResponse = {
      ok: true,
      contents: JSON.stringify({
        content: 'mock',
      }),
    };

    (fetch as FetchMock).mockResponseOnce(JSON.stringify(mockResponse));

    const params = { podcastId: '1234' };

    const response = await getPodcastEpisodes(params);

    const expectedRequest = new Request(GET_PODCAST(params));

    expect(fetch).toHaveBeenCalledWith(expectedRequest);
    expect(response).toEqual(mockResponse);
  });

  it('should return promise fail when api call fails', async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      })
    );
    try {
      const params = { podcastId: '1234' };

      await getPodcastEpisodes(params);

      const expectedRequest = new Request(GET_PODCAST(params));

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
      ok: true,
      contents: JSON.stringify({
        content: 'mock',
      }),
    };

    (fetch as FetchMock).mockResponseOnce(JSON.stringify(mockResponse));

    const response = await getPodcastChannels();

    const expectedRequest = new Request(GET_PODCASTS);

    expect(fetch).toHaveBeenCalledWith(expectedRequest);
    expect(response).toEqual(mockResponse);
  });

  it('should return promise fail when api call fails', async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      })
    );
    try {
      await getPodcastChannels();

      const expectedRequest = new Request(GET_PODCASTS);

      expect(fetch).toHaveBeenCalledWith(expectedRequest);
    } catch (error) {
      expect(error.message).toEqual('Error processing the request: Not Found');
    }
  });
});
