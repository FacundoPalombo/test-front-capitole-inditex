import URL, {
  GET_PODCAST_EPISODES,
  GET_PODCAST_CHANNELS,
} from '../utils/constants/URL.js';

export const getPodcastEpisodes = ({ podcastId }) => {
  const req = new Request(URL[GET_PODCAST_EPISODES]({ podcastId }), {
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

export const getPodcastChannels = () => {
  const req = new Request(URL[GET_PODCAST_CHANNELS], {
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
