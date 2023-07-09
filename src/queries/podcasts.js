import { getPodcastChannels, getPodcastEpisodes } from '../services/podcasts';

export const episodes = (podcastId) => ({
  queryKey: ['podcasts', podcastId],
  queryFn: () => getPodcastEpisodes({ podcastId }),
});

export const channels = () => ({
  queryKey: ['channels'],
  queryFn: getPodcastChannels,
});
