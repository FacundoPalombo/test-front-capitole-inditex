import {
  channels as channelsQuery,
  episodes as episodesQuery,
} from '../podcasts';
import {
  getPodcastChannels,
  getPodcastEpisodes,
} from '../../services/podcasts';

jest.mock('../../services/podcasts');

describe('queries unit tests', () => {
  describe('should return the expected object', () => {
    it('episodes', () => {
      getPodcastEpisodes.mockReturnValue('getPodcastEpisodes');
      // Sheldon's number
      const podcastId = 73;

      const assert = {
        queryKey: ['podcasts', podcastId],
        queryFn: () => getPodcastEpisodes({ podcastId }),
      };
      const query = episodesQuery(podcastId);

      expect(JSON.stringify(query)).toEqual(JSON.stringify(assert));
      expect(query.queryFn()).toEqual('getPodcastEpisodes');
      expect(getPodcastEpisodes).toHaveBeenCalledWith({ podcastId });
    });
    it('channels', () => {
      const assert = {
        queryKey: ['channels'],
        queryFn: getPodcastChannels,
      };
      const query = channelsQuery();

      expect(JSON.stringify(query)).toEqual(JSON.stringify(assert));
    });
  });
});
