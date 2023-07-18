const Axios = require('axios').default;

const {
  GET_PODCAST_CHANNELS,
  GET_PODCAST_EPISODES,
  baseURL,
} = require('../utils/URL');

const Logger = require('../lib/logger');

const restclient = Axios.create({ baseURL });

const getPodcasts = async () => {
  try {
    const { data } = await restclient.get(GET_PODCAST_CHANNELS);
    return data;
  } catch (error) {
    Logger.error(error);
    throw error;
  }
};

const getPodcast = async ({ podcastId }) => {
  try {
    const { data } = await restclient.get(GET_PODCAST_EPISODES, {
      params: {
        id: podcastId,
        media: 'podcast',
        entity: 'podcastEpisode',
        limit: 20,
      },
    });
    return data;
  } catch (error) {
    Logger.error(error);
    throw error;
  }
};

module.exports = {
  getPodcasts,
  getPodcast,
};
