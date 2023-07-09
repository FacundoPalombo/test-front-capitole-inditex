const express = require('express');
const { getPodcasts, getPodcast } = require('../middlewares/podcasts');
const router = express.Router();

router.get('/', getPodcasts, (req, res) =>
  res.status(200).json(res.locals.podcasts)
);

router.get('/:podcastId', getPodcast, (req, res) =>
  res.status(200).json(res.locals.podcast)
);

module.exports = router;
