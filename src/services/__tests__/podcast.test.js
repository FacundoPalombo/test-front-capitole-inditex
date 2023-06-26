import URL, { GET_PODCAST } from '../../utils/constants/URL';
import { getPodcast } from '../podcast';

describe('getPodcast service unit test', () => {
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

    const response = await getPodcast(params);

    const expectedRequest = new Request(URL[GET_PODCAST](params));

    expect(fetch).toHaveBeenCalledWith(expectedRequest);
    expect(response).toEqual(mockResponse);
  });

  it('should return promise fail when api call fails', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ message: 'error unexpected', ok: false })
    );
    try {
      const params = { podcastId: '1234' };

      await getPodcast(params);

      const expectedRequest = new Request(URL[GET_PODCAST](params));

      expect(fetch).toHaveBeenCalledWith(expectedRequest);
    } catch (error) {
      expect(error.message).toEqual('Error processing response');
    }
  });
});
