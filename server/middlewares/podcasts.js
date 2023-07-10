const createHttpError = require('http-errors');
const {
  getPodcast: getPodcastService,
  getPodcasts: getPodcastsService,
} = require('../services/podcasts');

const getPodcast = async (req, res, next) => {
  try {
    const { podcastId } = req.params;

    const response = await getPodcastService({ podcastId });

    res.locals.data = response;

    next();
  } catch (error) {
    if (typeof error.statusCode === 'number')
      return next(
        createHttpError(error.statusCode, {
          stack: error.stack,
          message: error.message,
        })
      );
    return next(error);
  }
};

const getPodcasts = async (req, res, next) => {
  try {
    const response = await getPodcastsService();

    res.locals.data = response;

    next();
  } catch (error) {
    if (typeof error.statusCode === 'number')
      return next(
        createHttpError(error.statusCode, {
          stack: error.stack,
          message: error.message,
        })
      );
    return next(error);
  }
};

module.exports = {
  getPodcasts,
  getPodcast,
};
