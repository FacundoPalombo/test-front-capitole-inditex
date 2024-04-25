export type EpisodesResults = {
  resultCount: number;
  results: Results;
  [property: string]: any;
};

export type Results = Array<Episode | Track>;

export type Track = {
  artistName: string;
  artworkUrl100: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl600: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionHdPrice: number;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  contentAdvisoryRating: string;
  country: string;
  currency: string;
  feedUrl: string;
  genreIds: string[];
  genres: string[];
  kind: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCensoredName: string;
  trackCount: number;
  trackExplicitness: string;
  trackId: number;
  trackName: string;
  trackPrice: number;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
  [property: string]: any;
};

export type Episode = {
  artistIds: any[];
  artworkUrl160: string;
  artworkUrl60: string;
  artworkUrl600: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  collectionViewUrl: string;
  contentAdvisoryRating: string;
  country: string;
  description: string;
  episodeContentType: string;
  episodeFileExtension: string;
  episodeGuid: string;
  episodeUrl: string;
  feedUrl: string;
  genres: Genre[];
  kind: string;
  previewUrl: string;
  releaseDate: string;
  shortDescription: string;
  trackId: number;
  trackName: string;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
  [property: string]: any;
};

export type Genre = {
  id: string;
  name: string;
  [property: string]: any;
};
