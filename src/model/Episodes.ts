export type EpisodesResults = {
  readonly resultCount: number;
  readonly results: Episode | Track;
  [property: string]: any;
};
export type Track = {
  readonly artistName?: string;
  readonly artworkUrl100?: string;
  readonly artworkUrl30?: string;
  readonly artworkUrl60?: string;
  readonly artworkUrl600?: string;
  readonly collectionCensoredName?: string;
  readonly collectionExplicitness?: string;
  readonly collectionHdPrice?: number;
  readonly collectionId?: number;
  readonly collectionName?: string;
  readonly collectionPrice?: number;
  readonly collectionViewUrl?: string;
  readonly contentAdvisoryRating?: string;
  readonly country?: string;
  readonly currency?: string;
  readonly feedUrl?: string;
  readonly genreIds?: string[];
  readonly genres?: string[];
  readonly kind?: string;
  readonly primaryGenreName?: string;
  readonly releaseDate?: string;
  readonly trackCensoredName?: string;
  readonly trackCount?: number;
  readonly trackExplicitness?: string;
  readonly trackId?: number;
  readonly trackName?: string;
  readonly trackPrice?: number;
  readonly trackTimeMillis?: number;
  readonly trackViewUrl?: string;
  readonly wrapperType?: string;
  [property: string]: any;
};

export type Episode = {
  artistIds?: any[];
  artworkUrl160?: string;
  artworkUrl60?: string;
  artworkUrl600?: string;
  closedCaptioning?: string;
  collectionId?: number;
  collectionName?: string;
  collectionViewUrl?: string;
  contentAdvisoryRating?: string;
  country?: string;
  description?: string;
  episodeContentType?: string;
  episodeFileExtension?: string;
  episodeGuid?: string;
  episodeUrl?: string;
  feedUrl?: string;
  genres?: Genre[];
  kind?: string;
  previewUrl?: string;
  releaseDate?: string;
  shortDescription?: string;
  trackId?: number;
  trackName?: string;
  trackTimeMillis?: number;
  trackViewUrl?: string;
  wrapperType?: string;
  [property: string]: any;
};

export type Genre = {
  id?: string;
  name?: string;
  [property: string]: any;
};