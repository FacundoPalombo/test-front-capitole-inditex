const express = require('express');
const { getPodcasts, getPodcast } = require('../middlewares/podcasts');
const { cacheLoader } = require('../middlewares/cache');

const router = express.Router();

router.get('/', getPodcasts, cacheLoader, (req, res) => {
  res.status(200).json(res.locals.data);
});

router.get('/:podcastId', getPodcast, cacheLoader, (req, res) =>
  res.status(200).json(res.locals.data)
);

module.exports = router;
