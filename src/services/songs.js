import URL, { GET_SONGS } from '../utils/constants/URL.js';

export const getSongs = async () => {
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
    .then((data) => data.contents)
    .catch((err) => console.error(err));
  console.log(response);
  return response;
};
