import createHttpError from 'http-errors';
import { Request, Response, NextFunction } from 'express';
import {
  getPodcast as getPodcastService,
  getPodcasts as getPodcastsService,
} from '../services/podcasts';
import Axios, { AxiosError } from 'axios';

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
  } catch (error: unknown | Error | AxiosError) {
    if (Axios.isAxiosError(error) && error.response) {
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
  } catch (error: unknown | Error | AxiosError) {
    if (Axios.isAxiosError(error) && error.response) {
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
