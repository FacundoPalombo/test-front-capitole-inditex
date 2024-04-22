import express, { Request, Response } from 'express';
const router = express.Router();
import podcastsRouter from './podcasts';

router.get(['/', '/ping'], (req: Request, res: Response) => {
  res.status(200).json({ ping: 'pong' });
});

router.use('/podcasts', podcastsRouter);

export default router;
