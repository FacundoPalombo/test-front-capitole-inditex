import { getPodcastChannels, getPodcastEpisodes } from '../services/podcast';

export const episodes = (podcastId) => ({
  queryKey: ['podcasts', podcastId],
  queryFn: () => getPodcastEpisodes({ podcastId }),
});

export const channels = () => ({
  queryKey: ['channels'],
  queryFn: getPodcastChannels,
});
