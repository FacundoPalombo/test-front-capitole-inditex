const baseURL = 'https://itunes.apple.com';

const URL = Object.freeze({
  baseURL,
  GET_PODCAST_CHANNELS: '/us/rss/toppodcasts/limit=100/genre=1310/json',
  GET_PODCAST_EPISODES: '/lookup',
});

module.exports = URL;
