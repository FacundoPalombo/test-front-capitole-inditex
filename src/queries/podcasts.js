import { getPodcastChannels, getPodcastEpisodes } from '../services/podcast';
import { DAY_IN_MILLISECONDS } from '../utils/constants/various';

export const episodes =
  (queryClient) =>
  async ({ podcastId }) => {
    const episodesInCache = await queryClient.getQueryData(
      `podcasts/${podcastId}`
    );
    let episodes = episodesInCache;

    if (!episodesInCache) {
      episodes = await queryClient.fetchQuery(
        `podcasts/${podcastId}`,
        async () => await getPodcastEpisodes({ podcastId: podcastId }),
        { staleTime: DAY_IN_MILLISECONDS }
      );
    }
    return episodes;
  };

export const channels = (queryClient) => async () => {
  const channelsInCache = await queryClient.getQueryData('channels');
  let channels = channelsInCache;

  if (!channelsInCache) {
    channels = await queryClient.fetchQuery(
      'channels',
      async () => await getPodcastChannels(),
      { staleTime: DAY_IN_MILLISECONDS }
    );
  }
  return channels;
};
