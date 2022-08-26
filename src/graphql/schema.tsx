import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T> = any; // extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T> = any; //, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T> = any; //, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: Maybe<Scalars['String']>;
  transform?: Maybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  contentType?: Maybe<Scalars['String']>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  description?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName?: Maybe<Scalars['String']>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  height?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size?: Maybe<Scalars['Int']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sys?: Maybe<SysFilter>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
  url_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  width?: Maybe<Scalars['Int']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  memberCollection?: Maybe<MemberCollection>;
  numberpriceCollection?: Maybe<NumberpriceCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsMemberCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsNumberpriceCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** A thing they can order from the bar [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/consumption) */
export type Consumption = Entry & {
  __typename?: 'Consumption';
  category?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ConsumptionLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
  ticketAmount?: Maybe<Scalars['Int']>;
};


/** A thing they can order from the bar [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/consumption) */
export type ConsumptionCategoryArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A thing they can order from the bar [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/consumption) */
export type ConsumptionLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A thing they can order from the bar [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/consumption) */
export type ConsumptionNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A thing they can order from the bar [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/consumption) */
export type ConsumptionTicketAmountArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ConsumptionCollection = {
  __typename?: 'ConsumptionCollection';
  items: Array<Maybe<Consumption>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ConsumptionFilter = {
  AND?: Maybe<Array<Maybe<ConsumptionFilter>>>;
  OR?: Maybe<Array<Maybe<ConsumptionFilter>>>;
  category?: Maybe<Scalars['String']>;
  category_contains?: Maybe<Scalars['String']>;
  category_exists?: Maybe<Scalars['Boolean']>;
  category_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_not?: Maybe<Scalars['String']>;
  category_not_contains?: Maybe<Scalars['String']>;
  category_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys?: Maybe<SysFilter>;
  ticketAmount?: Maybe<Scalars['Int']>;
  ticketAmount_exists?: Maybe<Scalars['Boolean']>;
  ticketAmount_gt?: Maybe<Scalars['Int']>;
  ticketAmount_gte?: Maybe<Scalars['Int']>;
  ticketAmount_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ticketAmount_lt?: Maybe<Scalars['Int']>;
  ticketAmount_lte?: Maybe<Scalars['Int']>;
  ticketAmount_not?: Maybe<Scalars['Int']>;
  ticketAmount_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ConsumptionLinkingCollections = {
  __typename?: 'ConsumptionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ConsumptionLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum ConsumptionOrder {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TicketAmountAsc = 'ticketAmount_ASC',
  TicketAmountDesc = 'ticketAmount_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: Maybe<ContentfulMetadataTagsFilter>;
  tags_exists?: Maybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: Maybe<Array<Maybe<EntryFilter>>>;
  OR?: Maybe<Array<Maybe<EntryFilter>>>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  sys?: Maybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/event) */
export type Event = Entry & {
  __typename?: 'Event';
  contentfulMetadata: ContentfulMetadata;
  from?: Maybe<Scalars['DateTime']>;
  link?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<EventLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['DateTime']>;
};


/** [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/event) */
export type EventFromArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/event) */
export type EventLinkArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/event) */
export type EventLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/event) */
export type EventTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/event) */
export type EventToArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type EventCollection = {
  __typename?: 'EventCollection';
  items: Array<Maybe<Event>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EventFilter = {
  AND?: Maybe<Array<Maybe<EventFilter>>>;
  OR?: Maybe<Array<Maybe<EventFilter>>>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  from?: Maybe<Scalars['DateTime']>;
  from_exists?: Maybe<Scalars['Boolean']>;
  from_gt?: Maybe<Scalars['DateTime']>;
  from_gte?: Maybe<Scalars['DateTime']>;
  from_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  from_lt?: Maybe<Scalars['DateTime']>;
  from_lte?: Maybe<Scalars['DateTime']>;
  from_not?: Maybe<Scalars['DateTime']>;
  from_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  link?: Maybe<Scalars['String']>;
  link_contains?: Maybe<Scalars['String']>;
  link_exists?: Maybe<Scalars['Boolean']>;
  link_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  link_not?: Maybe<Scalars['String']>;
  link_not_contains?: Maybe<Scalars['String']>;
  link_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys?: Maybe<SysFilter>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  to?: Maybe<Scalars['DateTime']>;
  to_exists?: Maybe<Scalars['Boolean']>;
  to_gt?: Maybe<Scalars['DateTime']>;
  to_gte?: Maybe<Scalars['DateTime']>;
  to_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  to_lt?: Maybe<Scalars['DateTime']>;
  to_lte?: Maybe<Scalars['DateTime']>;
  to_not?: Maybe<Scalars['DateTime']>;
  to_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type EventLinkingCollections = {
  __typename?: 'EventLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type EventLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum EventOrder {
  FromAsc = 'from_ASC',
  FromDesc = 'from_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ToAsc = 'to_ASC',
  ToDesc = 'to_DESC'
}

/** One of the focus numbers on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/focusnumber) */
export type Focusnumber = Entry & {
  __typename?: 'Focusnumber';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<FocusnumberLinkingCollections>;
  number?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** One of the focus numbers on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/focusnumber) */
export type FocusnumberLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** One of the focus numbers on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/focusnumber) */
export type FocusnumberNumberArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** One of the focus numbers on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/focusnumber) */
export type FocusnumberOrderArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** One of the focus numbers on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/focusnumber) */
export type FocusnumberTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type FocusnumberCollection = {
  __typename?: 'FocusnumberCollection';
  items: Array<Maybe<Focusnumber>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FocusnumberFilter = {
  AND?: Maybe<Array<Maybe<FocusnumberFilter>>>;
  OR?: Maybe<Array<Maybe<FocusnumberFilter>>>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  number?: Maybe<Scalars['Int']>;
  number_exists?: Maybe<Scalars['Boolean']>;
  number_gt?: Maybe<Scalars['Int']>;
  number_gte?: Maybe<Scalars['Int']>;
  number_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  number_lt?: Maybe<Scalars['Int']>;
  number_lte?: Maybe<Scalars['Int']>;
  number_not?: Maybe<Scalars['Int']>;
  number_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  order?: Maybe<Scalars['Int']>;
  order_exists?: Maybe<Scalars['Boolean']>;
  order_gt?: Maybe<Scalars['Int']>;
  order_gte?: Maybe<Scalars['Int']>;
  order_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  order_lt?: Maybe<Scalars['Int']>;
  order_lte?: Maybe<Scalars['Int']>;
  order_not?: Maybe<Scalars['Int']>;
  order_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sys?: Maybe<SysFilter>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FocusnumberLinkingCollections = {
  __typename?: 'FocusnumberLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FocusnumberLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum FocusnumberOrder {
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
};

/** Spelmaecker member [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/member) */
export type Member = Entry & {
  __typename?: 'Member';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<MemberDescription>;
  facebookLink?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<MemberLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Asset>;
  sys: Sys;
};


/** Spelmaecker member [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/member) */
export type MemberDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Spelmaecker member [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/member) */
export type MemberFacebookLinkArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Spelmaecker member [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/member) */
export type MemberLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Spelmaecker member [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/member) */
export type MemberNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Spelmaecker member [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/member) */
export type MemberProfilePictureArgs = {
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};

export type MemberCollection = {
  __typename?: 'MemberCollection';
  items: Array<Maybe<Member>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MemberDescription = {
  __typename?: 'MemberDescription';
  json: Scalars['JSON'];
  links: MemberDescriptionLinks;
};

export type MemberDescriptionAssets = {
  __typename?: 'MemberDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type MemberDescriptionEntries = {
  __typename?: 'MemberDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type MemberDescriptionLinks = {
  __typename?: 'MemberDescriptionLinks';
  assets: MemberDescriptionAssets;
  entries: MemberDescriptionEntries;
};

export type MemberFilter = {
  AND?: Maybe<Array<Maybe<MemberFilter>>>;
  OR?: Maybe<Array<Maybe<MemberFilter>>>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  description_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_not_contains?: Maybe<Scalars['String']>;
  facebookLink?: Maybe<Scalars['String']>;
  facebookLink_contains?: Maybe<Scalars['String']>;
  facebookLink_exists?: Maybe<Scalars['Boolean']>;
  facebookLink_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebookLink_not?: Maybe<Scalars['String']>;
  facebookLink_not_contains?: Maybe<Scalars['String']>;
  facebookLink_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  profilePicture_exists?: Maybe<Scalars['Boolean']>;
  sys?: Maybe<SysFilter>;
};

export type MemberLinkingCollections = {
  __typename?: 'MemberLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MemberLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum MemberOrder {
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Prices for when the Spelmaeckers counter rises [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/numberprice) */
export type Numberprice = Entry & {
  __typename?: 'Numberprice';
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<NumberpriceLinkingCollections>;
  number?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Prices for when the Spelmaeckers counter rises [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/numberprice) */
export type NumberpriceImageArgs = {
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


/** Prices for when the Spelmaeckers counter rises [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/numberprice) */
export type NumberpriceLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Prices for when the Spelmaeckers counter rises [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/numberprice) */
export type NumberpriceNumberArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Prices for when the Spelmaeckers counter rises [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/numberprice) */
export type NumberpriceTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type NumberpriceCollection = {
  __typename?: 'NumberpriceCollection';
  items: Array<Maybe<Numberprice>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NumberpriceFilter = {
  AND?: Maybe<Array<Maybe<NumberpriceFilter>>>;
  OR?: Maybe<Array<Maybe<NumberpriceFilter>>>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  image_exists?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['Int']>;
  number_exists?: Maybe<Scalars['Boolean']>;
  number_gt?: Maybe<Scalars['Int']>;
  number_gte?: Maybe<Scalars['Int']>;
  number_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  number_lt?: Maybe<Scalars['Int']>;
  number_lte?: Maybe<Scalars['Int']>;
  number_not?: Maybe<Scalars['Int']>;
  number_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sys?: Maybe<SysFilter>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type NumberpriceLinkingCollections = {
  __typename?: 'NumberpriceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NumberpriceLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum NumberpriceOrder {
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** One of the main sections on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/practicalItem) */
export type PracticalItem = Entry & {
  __typename?: 'PracticalItem';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<PracticalItemDescription>;
  icon?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PracticalItemLinkingCollections>;
  order?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** One of the main sections on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/practicalItem) */
export type PracticalItemDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** One of the main sections on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/practicalItem) */
export type PracticalItemIconArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** One of the main sections on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/practicalItem) */
export type PracticalItemLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** One of the main sections on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/practicalItem) */
export type PracticalItemOrderArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** One of the main sections on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/practicalItem) */
export type PracticalItemTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type PracticalItemCollection = {
  __typename?: 'PracticalItemCollection';
  items: Array<Maybe<PracticalItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PracticalItemDescription = {
  __typename?: 'PracticalItemDescription';
  json: Scalars['JSON'];
  links: PracticalItemDescriptionLinks;
};

export type PracticalItemDescriptionAssets = {
  __typename?: 'PracticalItemDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PracticalItemDescriptionEntries = {
  __typename?: 'PracticalItemDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PracticalItemDescriptionLinks = {
  __typename?: 'PracticalItemDescriptionLinks';
  assets: PracticalItemDescriptionAssets;
  entries: PracticalItemDescriptionEntries;
};

export type PracticalItemFilter = {
  AND?: Maybe<Array<Maybe<PracticalItemFilter>>>;
  OR?: Maybe<Array<Maybe<PracticalItemFilter>>>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  description_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_not_contains?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  icon_contains?: Maybe<Scalars['String']>;
  icon_exists?: Maybe<Scalars['Boolean']>;
  icon_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_not?: Maybe<Scalars['String']>;
  icon_not_contains?: Maybe<Scalars['String']>;
  icon_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  order?: Maybe<Scalars['Int']>;
  order_exists?: Maybe<Scalars['Boolean']>;
  order_gt?: Maybe<Scalars['Int']>;
  order_gte?: Maybe<Scalars['Int']>;
  order_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  order_lt?: Maybe<Scalars['Int']>;
  order_lte?: Maybe<Scalars['Int']>;
  order_not?: Maybe<Scalars['Int']>;
  order_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sys?: Maybe<SysFilter>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PracticalItemLinkingCollections = {
  __typename?: 'PracticalItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PracticalItemLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum PracticalItemOrder {
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  consumption?: Maybe<Consumption>;
  consumptionCollection?: Maybe<ConsumptionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  event?: Maybe<Event>;
  eventCollection?: Maybe<EventCollection>;
  focusnumber?: Maybe<Focusnumber>;
  focusnumberCollection?: Maybe<FocusnumberCollection>;
  member?: Maybe<Member>;
  memberCollection?: Maybe<MemberCollection>;
  numberprice?: Maybe<Numberprice>;
  numberpriceCollection?: Maybe<NumberpriceCollection>;
  practicalItem?: Maybe<PracticalItem>;
  practicalItemCollection?: Maybe<PracticalItemCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetFilter>;
};


export type QueryConsumptionArgs = {
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


export type QueryConsumptionCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<ConsumptionOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ConsumptionFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<EntryOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EntryFilter>;
};


export type QueryEventArgs = {
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


export type QueryEventCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<EventOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EventFilter>;
};


export type QueryFocusnumberArgs = {
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


export type QueryFocusnumberCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<FocusnumberOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<FocusnumberFilter>;
};


export type QueryMemberArgs = {
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


export type QueryMemberCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MemberOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MemberFilter>;
};


export type QueryNumberpriceArgs = {
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


export type QueryNumberpriceCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<NumberpriceOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NumberpriceFilter>;
};


export type QueryPracticalItemArgs = {
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


export type QueryPracticalItemCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<PracticalItemOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PracticalItemFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  id?: Maybe<Scalars['String']>;
  id_contains?: Maybe<Scalars['String']>;
  id_exists?: Maybe<Scalars['Boolean']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedVersion?: Maybe<Scalars['Float']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion_gt?: Maybe<Scalars['Float']>;
  publishedVersion_gte?: Maybe<Scalars['Float']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_lt?: Maybe<Scalars['Float']>;
  publishedVersion_lte?: Maybe<Scalars['Float']>;
  publishedVersion_not?: Maybe<Scalars['Float']>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type GetConsumptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConsumptionsQuery = { __typename?: 'Query', consumptionCollection?: { __typename?: 'ConsumptionCollection', total: number, items: Array<{ __typename?: 'Consumption', name?: string | null, category?: string | null, ticketAmount?: number | null } | null> } | null };

export type GetEventsQueryVariables = Exact<{
  now: Scalars['DateTime'];
}>;


export type GetEventsQuery = { __typename?: 'Query', eventCollection?: { __typename?: 'EventCollection', total: number, items: Array<{ __typename?: 'Event', title?: string | null, link?: string | null, from?: any | null, to?: any | null } | null> } | null };

export type GetFocusNumbersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFocusNumbersQuery = { __typename?: 'Query', focusnumberCollection?: { __typename?: 'FocusnumberCollection', total: number, items: Array<{ __typename?: 'Focusnumber', title?: string | null, number?: number | null, order?: number | null } | null> } | null };

export type GetMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMembersQuery = { __typename?: 'Query', memberCollection?: { __typename?: 'MemberCollection', total: number, items: Array<{ __typename?: 'Member', name?: string | null, facebookLink?: string | null, description?: { __typename?: 'MemberDescription', json: any } | null, profilePicture?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type GetNewGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewGamesQuery = { __typename?: 'Query', assetCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', title?: string | null, url?: string | null } | null> } | null };

export type GetNumberPricesQueryVariables = Exact<{
  currentCounter: Scalars['Int'];
}>;


export type GetNumberPricesQuery = { __typename?: 'Query', numberpriceCollection?: { __typename?: 'NumberpriceCollection', total: number, items: Array<{ __typename?: 'Numberprice', number?: number | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type GetPracticalItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPracticalItemsQuery = { __typename?: 'Query', practicalItemCollection?: { __typename?: 'PracticalItemCollection', total: number, items: Array<{ __typename?: 'PracticalItem', title?: string | null, icon?: string | null, order?: number | null, description?: { __typename?: 'PracticalItemDescription', json: any } | null } | null> } | null };


export const GetConsumptionsDocument = gql`
    query getConsumptions {
  consumptionCollection {
    total
    items {
      name
      category
      ticketAmount
    }
  }
}
    `;

/**
 * __useGetConsumptionsQuery__
 *
 * To run a query within a React component, call `useGetConsumptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConsumptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConsumptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetConsumptionsQuery(baseOptions?: Apollo.QueryHookOptions<GetConsumptionsQuery, GetConsumptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetConsumptionsQuery, GetConsumptionsQueryVariables>(GetConsumptionsDocument, options);
      }
export function useGetConsumptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetConsumptionsQuery, GetConsumptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetConsumptionsQuery, GetConsumptionsQueryVariables>(GetConsumptionsDocument, options);
        }
export type GetConsumptionsQueryHookResult = ReturnType<typeof useGetConsumptionsQuery>;
export type GetConsumptionsLazyQueryHookResult = ReturnType<typeof useGetConsumptionsLazyQuery>;
export type GetConsumptionsQueryResult = Apollo.QueryResult<GetConsumptionsQuery, GetConsumptionsQueryVariables>;
export const GetEventsDocument = gql`
    query getEvents($now: DateTime!) {
  eventCollection(
    where: {OR: [{from_gte: $now}, {to_gte: $now}]}
    limit: 3
    order: from_ASC
  ) {
    total
    items {
      title
      link
      from
      to
    }
  }
}
    `;

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *      now: // value for 'now'
 *   },
 * });
 */
export function useGetEventsQuery(baseOptions: Apollo.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
      }
export function useGetEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
        }
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
export type GetEventsQueryResult = Apollo.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
export const GetFocusNumbersDocument = gql`
    query getFocusNumbers {
  focusnumberCollection {
    total
    items {
      title
      number
      order
    }
  }
}
    `;

/**
 * __useGetFocusNumbersQuery__
 *
 * To run a query within a React component, call `useGetFocusNumbersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFocusNumbersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFocusNumbersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFocusNumbersQuery(baseOptions?: Apollo.QueryHookOptions<GetFocusNumbersQuery, GetFocusNumbersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFocusNumbersQuery, GetFocusNumbersQueryVariables>(GetFocusNumbersDocument, options);
      }
export function useGetFocusNumbersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFocusNumbersQuery, GetFocusNumbersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFocusNumbersQuery, GetFocusNumbersQueryVariables>(GetFocusNumbersDocument, options);
        }
export type GetFocusNumbersQueryHookResult = ReturnType<typeof useGetFocusNumbersQuery>;
export type GetFocusNumbersLazyQueryHookResult = ReturnType<typeof useGetFocusNumbersLazyQuery>;
export type GetFocusNumbersQueryResult = Apollo.QueryResult<GetFocusNumbersQuery, GetFocusNumbersQueryVariables>;
export const GetMembersDocument = gql`
    query getMembers {
  memberCollection {
    total
    items {
      name
      description {
        json
      }
      facebookLink
      profilePicture {
        url
      }
    }
  }
}
    `;

/**
 * __useGetMembersQuery__
 *
 * To run a query within a React component, call `useGetMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMembersQuery(baseOptions?: Apollo.QueryHookOptions<GetMembersQuery, GetMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, options);
      }
export function useGetMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMembersQuery, GetMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, options);
        }
export type GetMembersQueryHookResult = ReturnType<typeof useGetMembersQuery>;
export type GetMembersLazyQueryHookResult = ReturnType<typeof useGetMembersLazyQuery>;
export type GetMembersQueryResult = Apollo.QueryResult<GetMembersQuery, GetMembersQueryVariables>;
export const GetNewGamesDocument = gql`
    query getNewGames {
  assetCollection(
    where: {contentfulMetadata: {tags: {id_contains_all: ["newGame"]}}}
  ) {
    items {
      title
      url
    }
  }
}
    `;

/**
 * __useGetNewGamesQuery__
 *
 * To run a query within a React component, call `useGetNewGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewGamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNewGamesQuery(baseOptions?: Apollo.QueryHookOptions<GetNewGamesQuery, GetNewGamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewGamesQuery, GetNewGamesQueryVariables>(GetNewGamesDocument, options);
      }
export function useGetNewGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewGamesQuery, GetNewGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewGamesQuery, GetNewGamesQueryVariables>(GetNewGamesDocument, options);
        }
export type GetNewGamesQueryHookResult = ReturnType<typeof useGetNewGamesQuery>;
export type GetNewGamesLazyQueryHookResult = ReturnType<typeof useGetNewGamesLazyQuery>;
export type GetNewGamesQueryResult = Apollo.QueryResult<GetNewGamesQuery, GetNewGamesQueryVariables>;
export const GetNumberPricesDocument = gql`
    query getNumberPrices($currentCounter: Int!) {
  numberpriceCollection(limit: 2, where: {number_gt: $currentCounter}) {
    total
    items {
      number
      image {
        url
      }
    }
  }
}
    `;

/**
 * __useGetNumberPricesQuery__
 *
 * To run a query within a React component, call `useGetNumberPricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNumberPricesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNumberPricesQuery({
 *   variables: {
 *      currentCounter: // value for 'currentCounter'
 *   },
 * });
 */
export function useGetNumberPricesQuery(baseOptions: Apollo.QueryHookOptions<GetNumberPricesQuery, GetNumberPricesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNumberPricesQuery, GetNumberPricesQueryVariables>(GetNumberPricesDocument, options);
      }
export function useGetNumberPricesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNumberPricesQuery, GetNumberPricesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNumberPricesQuery, GetNumberPricesQueryVariables>(GetNumberPricesDocument, options);
        }
export type GetNumberPricesQueryHookResult = ReturnType<typeof useGetNumberPricesQuery>;
export type GetNumberPricesLazyQueryHookResult = ReturnType<typeof useGetNumberPricesLazyQuery>;
export type GetNumberPricesQueryResult = Apollo.QueryResult<GetNumberPricesQuery, GetNumberPricesQueryVariables>;
export const GetPracticalItemsDocument = gql`
    query getPracticalItems {
  practicalItemCollection {
    total
    items {
      title
      description {
        json
      }
      icon
      order
    }
  }
}
    `;

/**
 * __useGetPracticalItemsQuery__
 *
 * To run a query within a React component, call `useGetPracticalItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPracticalItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPracticalItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPracticalItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetPracticalItemsQuery, GetPracticalItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPracticalItemsQuery, GetPracticalItemsQueryVariables>(GetPracticalItemsDocument, options);
      }
export function useGetPracticalItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPracticalItemsQuery, GetPracticalItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPracticalItemsQuery, GetPracticalItemsQueryVariables>(GetPracticalItemsDocument, options);
        }
export type GetPracticalItemsQueryHookResult = ReturnType<typeof useGetPracticalItemsQuery>;
export type GetPracticalItemsLazyQueryHookResult = ReturnType<typeof useGetPracticalItemsLazyQuery>;
export type GetPracticalItemsQueryResult = Apollo.QueryResult<GetPracticalItemsQuery, GetPracticalItemsQueryVariables>;