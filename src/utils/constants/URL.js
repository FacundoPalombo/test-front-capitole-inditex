// keys
export const GET_PODCAST_CHANNELS = 'GET_PODCAST_CHANNELS';
export const GET_PODCAST_EPISODES = 'GET_PODCAST_EPISODES';

const baseUrl = `https://corsproxy.io/?${encodeURIComponent(
  'https://itunes.apple.com'
)}`;

const URL = Object.freeze({
  GET_PODCAST_CHANNELS: `${baseUrl}${encodeURIComponent(
    '/us/rss/toppodcasts/limit=100/genre=1310/json'
  )}`,
  GET_PODCAST_EPISODES: ({ podcastId }) =>
    `${baseUrl}${encodeURIComponent(
      `/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
    )}`,
});

export default URL;
