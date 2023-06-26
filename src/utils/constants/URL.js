// keys
export const GET_SONGS = 'GET_SONGS';
export const GET_PODCAST = 'GET_PODCAST';

const baseUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
  'https://itunes.apple.com'
)}`;

const URL = Object.freeze({
  GET_SONGS: `${baseUrl}${encodeURIComponent(
    '/us/rss/toppodcasts/limit=100/genre=1310/json'
  )}`,
  GET_PODCAST: ({ podcastId }) =>
    `${baseUrl}${encodeURIComponent(
      `/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
    )}`,
});

export default URL;
