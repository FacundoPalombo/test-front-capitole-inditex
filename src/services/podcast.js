import URL, { GET_PODCAST } from '../utils/constants/URL.js';

export const getPodcast = ({ podcastId }) => {
  const req = new Request(URL[GET_PODCAST]({ podcastId }), {
    cache: 'default',
  });

  const response = fetch(req)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Error processing response');
    })
    .then((data) => JSON.parse(data.contents))
    .catch((err) => {
      throw err;
    });
  return response;
};
