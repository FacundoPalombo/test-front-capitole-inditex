import URL, { GET_SONGS } from '../utils/constants/URL.js';

export const getSongs = () => {
  const req = new Request(URL[GET_SONGS], {
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
