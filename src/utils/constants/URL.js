const URL = Object.freeze({
  GET_PODCASTS: `/api/podcasts`,
  GET_PODCAST: ({ podcastId }) => `/api/podcasts/${podcastId}`,
});

export default URL;
