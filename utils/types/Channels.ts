export type Channels = {
  readonly feed: Channel;
  [property: string]: any;
};

export type Channel = {
  readonly author: Author;
  readonly entry: Entry[];
  readonly icon: Icon;
  readonly id: ChannelID;
  readonly link: LinkElement[];
  readonly rights: ChannelRights;
  readonly title: ChannelTitle;
  readonly updated: Updated;
  [property: string]: any;
};

export type Author = {
  readonly name: Name;
  readonly uri: URI;
  [property: string]: any;
};

export type Name = {
  readonly label: string;
  [property: string]: any;
};

export type URI = {
  readonly label: string;
  [property: string]: any;
};

export type Entry = {
  readonly category: Category;
  readonly id: EntryID;
  readonly 'im:artist': IMArtist;
  readonly 'im:contentType': IMContentType;
  readonly 'im:image': IMImage[];
  readonly 'im:name': IMName;
  readonly 'im:price': IMPrice;
  readonly 'im:releaseDate': IMReleaseDate;
  readonly link: EntryLink;
  readonly rights: EntryRights;
  readonly summary: Summary;
  readonly title: EntryTitle;
  [property: string]: any;
};

export type Category = {
  readonly attributes: CategoryAttributes;
  [property: string]: any;
};

export type CategoryAttributes = {
  readonly 'im:id': string;
  readonly label: string;
  readonly scheme: string;
  readonly term: string;
  [property: string]: any;
};

export type EntryID = {
  readonly attributes: IDAttributes;
  readonly label: string;
  [property: string]: any;
};

export type IDAttributes = {
  readonly 'im:id': string;
  [property: string]: any;
};

export type IMArtist = {
  readonly attributes: IMArtistAttributes;
  readonly label: string;
  [property: string]: any;
};

export type IMArtistAttributes = {
  readonly href: string;
  [property: string]: any;
};

export type IMContentType = {
  readonly attributes: IMContentTypeAttributes;
  [property: string]: any;
};

export type IMContentTypeAttributes = {
  readonly label: string;
  readonly term: string;
  [property: string]: any;
};

export type IMImage = {
  readonly attributes: IMImageAttributes;
  readonly label: string;
  [property: string]: any;
};

export type IMImageAttributes = {
  readonly height: string;
  [property: string]: any;
};

export type IMName = {
  readonly label: string;
  [property: string]: any;
};

export type IMPrice = {
  readonly attributes: IMPriceAttributes;
  readonly label: string;
  [property: string]: any;
};

export type IMPriceAttributes = {
  readonly amount: string;
  readonly currency: string;
  [property: string]: any;
};

export type IMReleaseDate = {
  readonly attributes: IMReleaseDateAttributes;
  readonly label: string;
  [property: string]: any;
};

export type IMReleaseDateAttributes = {
  readonly label: string;
  [property: string]: any;
};

export type EntryLink = {
  readonly attributes: PurpleAttributes;
  [property: string]: any;
};

export type PurpleAttributes = {
  readonly href: string;
  readonly rel: string;
  readonly type: string;
  [property: string]: any;
};

export type EntryRights = {
  readonly label: string;
  [property: string]: any;
};

export type Summary = {
  readonly label: string;
  [property: string]: any;
};

export type EntryTitle = {
  readonly label: string;
  [property: string]: any;
};

export type Icon = {
  readonly label: string;
  [property: string]: any;
};

export type ChannelID = {
  readonly label: string;
  [property: string]: any;
};

export type LinkElement = {
  readonly attributes: FluffyAttributes;
  [property: string]: any;
};

export type FluffyAttributes = {
  readonly href: string;
  readonly rel: string;
  readonly type: string;
  [property: string]: any;
};

export type ChannelRights = {
  readonly label: string;
  [property: string]: any;
};

export type ChannelTitle = {
  readonly label: string;
  [property: string]: any;
};

export type Updated = {
  readonly label: string;
  [property: string]: any;
};
