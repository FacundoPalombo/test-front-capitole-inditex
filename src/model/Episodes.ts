export type EpisodesResults = {
  readonly resultCount: number;
  readonly results: Episode[];
  [property: string]: any;
};

export type Episode = {
  readonly artistId: number;
  readonly artistName: string;
  readonly artistViewUrl: string;
  readonly artworkUrl100: string;
  readonly artworkUrl30: string;
  readonly artworkUrl60: string;
  readonly artworkUrl600: string;
  readonly collectionCensoredName: string;
  readonly collectionExplicitness: string;
  readonly collectionHdPrice: number;
  readonly collectionId: number;
  readonly collectionName: string;
  readonly collectionPrice: number;
  readonly collectionViewUrl: string;
  readonly contentAdvisoryRating: string;
  readonly country: string;
  readonly currency: string;
  readonly feedUrl: string;
  readonly genreIds: string[];
  readonly genres: Array<GenreObject | string>;
  readonly kind: string;
  readonly primaryGenreName: string;
  readonly releaseDate: string;
  readonly trackCensoredName: string;
  readonly trackCount: number;
  readonly trackExplicitness: string;
  readonly trackId: number;
  readonly trackName: string;
  readonly trackPrice: number;
  readonly trackTimeMillis: number;
  readonly trackViewUrl: string;
  readonly wrapperType: string;
  readonly artistIds: number[];
  readonly artworkUrl160: string;
  readonly closedCaptioning: string;
  readonly description: string;
  readonly episodeContentType: string;
  readonly episodeFileExtension: string;
  readonly episodeGuid: string;
  readonly episodeUrl: string;
  readonly previewUrl: string;
  readonly shortDescription: string;
  [property: string]: any;
};

export type GenreObject = {
  readonly id: string;
  readonly name: string;
  [property: string]: any;
};
