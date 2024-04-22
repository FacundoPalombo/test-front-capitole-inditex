import Axios, { AxiosInstance } from 'axios';
import {
  baseURL,
  GET_PODCAST_CHANNELS,
  GET_PODCAST_EPISODES,
} from '../utils/URL';
import Logger from '../lib/logger';

const restclient: AxiosInstance = Axios.create({ baseURL });

type GetPodcastParams = {
  podcastId: string;
};

export const getPodcasts = async (): Promise<any> => {
  try {
    const { data } = await restclient.get(GET_PODCAST_CHANNELS);
    return data;
  } catch (error) {
    Logger.error(error);
    throw error;
  }
};

export const getPodcast = async ({
  podcastId,
}: GetPodcastParams): Promise<any> => {
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
