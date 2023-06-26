import URL, { GET_SONGS } from '../../utils/constants/URL';
import { getSongs } from '../songs';

describe('getSongs service unit test', () => {
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

    const response = await getSongs();

    const expectedRequest = new Request(URL[GET_SONGS]);

    expect(fetch).toHaveBeenCalledWith(expectedRequest);
    expect(response).toEqual(mockResponse);
  });

  it('should return promise fail when api call fails', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ message: 'error unexpected', ok: false })
    );
    try {
      await getSongs();

      const expectedRequest = new Request(URL[GET_SONGS]);

      expect(fetch).toHaveBeenCalledWith(expectedRequest);
    } catch (error) {
      expect(error.message).toEqual('Error processing response');
    }
  });
});
