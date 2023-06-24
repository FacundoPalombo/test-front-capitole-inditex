// keys
export const GET_SONGS = 'GET_SONGS';

const baseUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
  'https://itunes.apple.com'
)}`;

const URL = Object.freeze({
  GET_SONGS: `${baseUrl}${encodeURIComponent(
    '/us/rss/toppodcasts/limit=100/genre=1310/json'
  )}`,
});

export default URL;
