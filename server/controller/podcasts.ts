import express, { Request, Response } from 'express';
import { getPodcasts, getPodcast } from '../middlewares/podcasts';
import { cacheLoader } from '../middlewares/cache';

const router = express.Router();

router.get('/', getPodcasts, cacheLoader, (req: Request, res: Response) => {
  res.status(200).json(res.locals.data);
});

router.get(
  '/:podcastId',
  getPodcast,
  cacheLoader,
  (req: Request, res: Response) => res.status(200).json(res.locals.data)
);

export default router;
