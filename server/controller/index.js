const express = require('express');
const router = express.Router();
const podcastsRouter = require('./podcasts');

router.get(['/', '/ping'], (req, res) =>
  res.status(200).json({ ping: 'pong' })
);

router.use('/podcasts', podcastsRouter);

module.exports = router;
