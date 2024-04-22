import createHttpError from 'http-errors';
import { Request, Response, NextFunction } from 'express';
import {
  getPodcast as getPodcastService,
  getPodcasts as getPodcastsService,
} from '../services/podcasts';

export const getPodcast = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { podcastId } = req.params;

    const response = await getPodcastService({ podcastId });

    res.locals.data = response;

    next();
  } catch (error) {
    if (error.response && typeof error.response.status === 'number') {
      next(
        createHttpError(error.response.status, {
          stack: error.stack,
          message: error.message,
        })
      );
      return;
    }
    next(error);
  }
};

export const getPodcasts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const response = await getPodcastsService();

    res.locals.data = response;

    next();
  } catch (error) {
    if (error.response && typeof error.response.status === 'number') {
      next(
        createHttpError(error.response.status, {
          stack: error.stack,
          message: error.message,
        })
      );
      return;
    }
    next(error);
  }
};
