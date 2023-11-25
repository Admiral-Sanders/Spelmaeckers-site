import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
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
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  memberCollection?: Maybe<MemberCollection>;
  numberpriceCollection?: Maybe<NumberpriceCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsMemberCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsNumberpriceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  WidthDesc = 'width_DESC',
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
  locale?: InputMaybe<Scalars['String']>;
};

/** A thing they can order from the bar [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/consumption) */
export type ConsumptionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** A thing they can order from the bar [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/consumption) */
export type ConsumptionNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** A thing they can order from the bar [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/consumption) */
export type ConsumptionTicketAmountArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ConsumptionCollection = {
  __typename?: 'ConsumptionCollection';
  items: Array<Maybe<Consumption>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ConsumptionFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConsumptionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConsumptionFilter>>>;
  category?: InputMaybe<Scalars['String']>;
  category_contains?: InputMaybe<Scalars['String']>;
  category_exists?: InputMaybe<Scalars['Boolean']>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_not?: InputMaybe<Scalars['String']>;
  category_not_contains?: InputMaybe<Scalars['String']>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  ticketAmount?: InputMaybe<Scalars['Int']>;
  ticketAmount_exists?: InputMaybe<Scalars['Boolean']>;
  ticketAmount_gt?: InputMaybe<Scalars['Int']>;
  ticketAmount_gte?: InputMaybe<Scalars['Int']>;
  ticketAmount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  ticketAmount_lt?: InputMaybe<Scalars['Int']>;
  ticketAmount_lte?: InputMaybe<Scalars['Int']>;
  ticketAmount_not?: InputMaybe<Scalars['Int']>;
  ticketAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ConsumptionLinkingCollections = {
  __typename?: 'ConsumptionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type ConsumptionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TicketAmountDesc = 'ticketAmount_DESC',
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
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
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/event) */
export type EventLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/event) */
export type EventLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/event) */
export type EventTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/event) */
export type EventToArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type EventCollection = {
  __typename?: 'EventCollection';
  items: Array<Maybe<Event>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EventFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  from?: InputMaybe<Scalars['DateTime']>;
  from_exists?: InputMaybe<Scalars['Boolean']>;
  from_gt?: InputMaybe<Scalars['DateTime']>;
  from_gte?: InputMaybe<Scalars['DateTime']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  from_lt?: InputMaybe<Scalars['DateTime']>;
  from_lte?: InputMaybe<Scalars['DateTime']>;
  from_not?: InputMaybe<Scalars['DateTime']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  to?: InputMaybe<Scalars['DateTime']>;
  to_exists?: InputMaybe<Scalars['Boolean']>;
  to_gt?: InputMaybe<Scalars['DateTime']>;
  to_gte?: InputMaybe<Scalars['DateTime']>;
  to_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  to_lt?: InputMaybe<Scalars['DateTime']>;
  to_lte?: InputMaybe<Scalars['DateTime']>;
  to_not?: InputMaybe<Scalars['DateTime']>;
  to_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type EventLinkingCollections = {
  __typename?: 'EventLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type EventLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  ToDesc = 'to_DESC',
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
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** One of the focus numbers on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/focusnumber) */
export type FocusnumberNumberArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** One of the focus numbers on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/focusnumber) */
export type FocusnumberOrderArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** One of the focus numbers on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/focusnumber) */
export type FocusnumberTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FocusnumberCollection = {
  __typename?: 'FocusnumberCollection';
  items: Array<Maybe<Focusnumber>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FocusnumberFilter = {
  AND?: InputMaybe<Array<InputMaybe<FocusnumberFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FocusnumberFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  number?: InputMaybe<Scalars['Int']>;
  number_exists?: InputMaybe<Scalars['Boolean']>;
  number_gt?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
  number_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  number_lt?: InputMaybe<Scalars['Int']>;
  number_lte?: InputMaybe<Scalars['Int']>;
  number_not?: InputMaybe<Scalars['Int']>;
  number_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order?: InputMaybe<Scalars['Int']>;
  order_exists?: InputMaybe<Scalars['Boolean']>;
  order_gt?: InputMaybe<Scalars['Int']>;
  order_gte?: InputMaybe<Scalars['Int']>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_lt?: InputMaybe<Scalars['Int']>;
  order_lte?: InputMaybe<Scalars['Int']>;
  order_not?: InputMaybe<Scalars['Int']>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FocusnumberLinkingCollections = {
  __typename?: 'FocusnumberLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type FocusnumberLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC',
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
  Webp = 'WEBP',
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
  TopRight = 'TOP_RIGHT',
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
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** A challenge during the marathon [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/marathonChallenge) */
export type MarathonChallenge = Entry & {
  __typename?: 'MarathonChallenge';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<MarathonChallengeLinkingCollections>;
  sponsorPrice?: Maybe<Scalars['Float']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

/** A challenge during the marathon [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/marathonChallenge) */
export type MarathonChallengeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** A challenge during the marathon [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/marathonChallenge) */
export type MarathonChallengeSponsorPriceArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** A challenge during the marathon [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/marathonChallenge) */
export type MarathonChallengeTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** A challenge during the marathon [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/marathonChallenge) */
export type MarathonChallengeYearArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type MarathonChallengeCollection = {
  __typename?: 'MarathonChallengeCollection';
  items: Array<Maybe<MarathonChallenge>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MarathonChallengeFilter = {
  AND?: InputMaybe<Array<InputMaybe<MarathonChallengeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MarathonChallengeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sponsorPrice?: InputMaybe<Scalars['Float']>;
  sponsorPrice_exists?: InputMaybe<Scalars['Boolean']>;
  sponsorPrice_gt?: InputMaybe<Scalars['Float']>;
  sponsorPrice_gte?: InputMaybe<Scalars['Float']>;
  sponsorPrice_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  sponsorPrice_lt?: InputMaybe<Scalars['Float']>;
  sponsorPrice_lte?: InputMaybe<Scalars['Float']>;
  sponsorPrice_not?: InputMaybe<Scalars['Float']>;
  sponsorPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  year?: InputMaybe<Scalars['Int']>;
  year_exists?: InputMaybe<Scalars['Boolean']>;
  year_gt?: InputMaybe<Scalars['Int']>;
  year_gte?: InputMaybe<Scalars['Int']>;
  year_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  year_lt?: InputMaybe<Scalars['Int']>;
  year_lte?: InputMaybe<Scalars['Int']>;
  year_not?: InputMaybe<Scalars['Int']>;
  year_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type MarathonChallengeLinkingCollections = {
  __typename?: 'MarathonChallengeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type MarathonChallengeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MarathonChallengeOrder {
  SponsorPriceAsc = 'sponsorPrice_ASC',
  SponsorPriceDesc = 'sponsorPrice_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC',
}

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
  locale?: InputMaybe<Scalars['String']>;
};

/** Spelmaecker member [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/member) */
export type MemberFacebookLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Spelmaecker member [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/member) */
export type MemberLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Spelmaecker member [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/member) */
export type MemberNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Spelmaecker member [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/member) */
export type MemberProfilePictureArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
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
  resources: MemberDescriptionResources;
};

export type MemberDescriptionResources = {
  __typename?: 'MemberDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type MemberFilter = {
  AND?: InputMaybe<Array<InputMaybe<MemberFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MemberFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  facebookLink?: InputMaybe<Scalars['String']>;
  facebookLink_contains?: InputMaybe<Scalars['String']>;
  facebookLink_exists?: InputMaybe<Scalars['Boolean']>;
  facebookLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebookLink_not?: InputMaybe<Scalars['String']>;
  facebookLink_not_contains?: InputMaybe<Scalars['String']>;
  facebookLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profilePicture_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type MemberLinkingCollections = {
  __typename?: 'MemberLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type MemberLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
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
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** Prices for when the Spelmaeckers counter rises [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/numberprice) */
export type NumberpriceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Prices for when the Spelmaeckers counter rises [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/numberprice) */
export type NumberpriceNumberArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Prices for when the Spelmaeckers counter rises [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/numberprice) */
export type NumberpriceTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NumberpriceCollection = {
  __typename?: 'NumberpriceCollection';
  items: Array<Maybe<Numberprice>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NumberpriceFilter = {
  AND?: InputMaybe<Array<InputMaybe<NumberpriceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NumberpriceFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  number?: InputMaybe<Scalars['Int']>;
  number_exists?: InputMaybe<Scalars['Boolean']>;
  number_gt?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
  number_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  number_lt?: InputMaybe<Scalars['Int']>;
  number_lte?: InputMaybe<Scalars['Int']>;
  number_not?: InputMaybe<Scalars['Int']>;
  number_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NumberpriceLinkingCollections = {
  __typename?: 'NumberpriceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type NumberpriceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC',
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
  locale?: InputMaybe<Scalars['String']>;
};

/** One of the main sections on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/practicalItem) */
export type PracticalItemIconArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** One of the main sections on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/practicalItem) */
export type PracticalItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** One of the main sections on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/practicalItem) */
export type PracticalItemOrderArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** One of the main sections on the homepage [See type definition](https://app.contentful.com/spaces/6cgdkv8ktvf8/content_types/practicalItem) */
export type PracticalItemTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
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
  resources: PracticalItemDescriptionResources;
};

export type PracticalItemDescriptionResources = {
  __typename?: 'PracticalItemDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type PracticalItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<PracticalItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PracticalItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  icon_contains?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_not?: InputMaybe<Scalars['String']>;
  icon_not_contains?: InputMaybe<Scalars['String']>;
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  order?: InputMaybe<Scalars['Int']>;
  order_exists?: InputMaybe<Scalars['Boolean']>;
  order_gt?: InputMaybe<Scalars['Int']>;
  order_gte?: InputMaybe<Scalars['Int']>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_lt?: InputMaybe<Scalars['Int']>;
  order_lte?: InputMaybe<Scalars['Int']>;
  order_not?: InputMaybe<Scalars['Int']>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PracticalItemLinkingCollections = {
  __typename?: 'PracticalItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type PracticalItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC',
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
  marathonChallenge?: Maybe<MarathonChallenge>;
  marathonChallengeCollection?: Maybe<MarathonChallengeCollection>;
  member?: Maybe<Member>;
  memberCollection?: Maybe<MemberCollection>;
  numberprice?: Maybe<Numberprice>;
  numberpriceCollection?: Maybe<NumberpriceCollection>;
  practicalItem?: Maybe<PracticalItem>;
  practicalItemCollection?: Maybe<PracticalItemCollection>;
};

export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryConsumptionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryConsumptionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ConsumptionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConsumptionFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryEventArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EventOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventFilter>;
};

export type QueryFocusnumberArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryFocusnumberCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FocusnumberOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FocusnumberFilter>;
};

export type QueryMarathonChallengeArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryMarathonChallengeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MarathonChallengeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MarathonChallengeFilter>;
};

export type QueryMemberArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryMemberCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MemberOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberFilter>;
};

export type QueryNumberpriceArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryNumberpriceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NumberpriceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NumberpriceFilter>;
};

export type QueryPracticalItemArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryPracticalItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PracticalItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PracticalItemFilter>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  type: Scalars['String'];
  urn: Scalars['String'];
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
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type GetConsumptionsQueryVariables = Exact<{ [key: string]: never }>;

export type GetConsumptionsQuery = {
  __typename?: 'Query';
  consumptionCollection?: {
    __typename?: 'ConsumptionCollection';
    total: number;
    items: Array<{
      __typename?: 'Consumption';
      name?: string | null;
      category?: string | null;
      ticketAmount?: number | null;
    } | null>;
  } | null;
};

export type GetEventsQueryVariables = Exact<{
  now: Scalars['DateTime'];
}>;

export type GetEventsQuery = {
  __typename?: 'Query';
  eventCollection?: {
    __typename?: 'EventCollection';
    total: number;
    items: Array<{
      __typename?: 'Event';
      title?: string | null;
      link?: string | null;
      from?: any | null;
      to?: any | null;
    } | null>;
  } | null;
};

export type GetFocusNumbersQueryVariables = Exact<{ [key: string]: never }>;

export type GetFocusNumbersQuery = {
  __typename?: 'Query';
  focusnumberCollection?: {
    __typename?: 'FocusnumberCollection';
    total: number;
    items: Array<{
      __typename?: 'Focusnumber';
      title?: string | null;
      number?: number | null;
      order?: number | null;
    } | null>;
  } | null;
};

export type GetMarathonChallengeQueryVariables = Exact<{
  year: Scalars['Int'];
}>;

export type GetMarathonChallengeQuery = {
  __typename?: 'Query';
  marathonChallengeCollection?: {
    __typename?: 'MarathonChallengeCollection';
    total: number;
    items: Array<{
      __typename?: 'MarathonChallenge';
      title?: string | null;
      sponsorPrice?: number | null;
      year?: number | null;
    } | null>;
  } | null;
};

export type GetMembersQueryVariables = Exact<{ [key: string]: never }>;

export type GetMembersQuery = {
  __typename?: 'Query';
  memberCollection?: {
    __typename?: 'MemberCollection';
    total: number;
    items: Array<{
      __typename?: 'Member';
      name?: string | null;
      facebookLink?: string | null;
      description?: { __typename?: 'MemberDescription'; json: any } | null;
      profilePicture?: { __typename?: 'Asset'; url?: string | null } | null;
    } | null>;
  } | null;
};

export type GetNewGamesQueryVariables = Exact<{ [key: string]: never }>;

export type GetNewGamesQuery = {
  __typename?: 'Query';
  assetCollection?: {
    __typename?: 'AssetCollection';
    items: Array<{ __typename?: 'Asset'; title?: string | null; url?: string | null } | null>;
  } | null;
};

export type GetNumberPricesQueryVariables = Exact<{
  currentCounter: Scalars['Int'];
}>;

export type GetNumberPricesQuery = {
  __typename?: 'Query';
  numberpriceCollection?: {
    __typename?: 'NumberpriceCollection';
    total: number;
    items: Array<{
      __typename?: 'Numberprice';
      number?: number | null;
      image?: { __typename?: 'Asset'; url?: string | null } | null;
    } | null>;
  } | null;
};

export type GetPracticalItemsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPracticalItemsQuery = {
  __typename?: 'Query';
  practicalItemCollection?: {
    __typename?: 'PracticalItemCollection';
    total: number;
    items: Array<{
      __typename?: 'PracticalItem';
      title?: string | null;
      icon?: string | null;
      order?: number | null;
      description?: { __typename?: 'PracticalItemDescription'; json: any } | null;
    } | null>;
  } | null;
};

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
export function useGetConsumptionsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetConsumptionsQuery, GetConsumptionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetConsumptionsQuery, GetConsumptionsQueryVariables>(GetConsumptionsDocument, options);
}
export function useGetConsumptionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetConsumptionsQuery, GetConsumptionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetConsumptionsQuery, GetConsumptionsQueryVariables>(GetConsumptionsDocument, options);
}
export type GetConsumptionsQueryHookResult = ReturnType<typeof useGetConsumptionsQuery>;
export type GetConsumptionsLazyQueryHookResult = ReturnType<typeof useGetConsumptionsLazyQuery>;
export type GetConsumptionsQueryResult = Apollo.QueryResult<GetConsumptionsQuery, GetConsumptionsQueryVariables>;
export const GetEventsDocument = gql`
  query getEvents($now: DateTime!) {
    eventCollection(where: { OR: [{ from_gte: $now }, { to_gte: $now }] }, limit: 3, order: from_ASC) {
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
}
export function useGetEventsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
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
export function useGetFocusNumbersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetFocusNumbersQuery, GetFocusNumbersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFocusNumbersQuery, GetFocusNumbersQueryVariables>(GetFocusNumbersDocument, options);
}
export function useGetFocusNumbersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFocusNumbersQuery, GetFocusNumbersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFocusNumbersQuery, GetFocusNumbersQueryVariables>(GetFocusNumbersDocument, options);
}
export type GetFocusNumbersQueryHookResult = ReturnType<typeof useGetFocusNumbersQuery>;
export type GetFocusNumbersLazyQueryHookResult = ReturnType<typeof useGetFocusNumbersLazyQuery>;
export type GetFocusNumbersQueryResult = Apollo.QueryResult<GetFocusNumbersQuery, GetFocusNumbersQueryVariables>;
export const GetMarathonChallengeDocument = gql`
  query getMarathonChallenge($year: Int!) {
    marathonChallengeCollection(where: { year: $year }) {
      total
      items {
        title
        sponsorPrice
        year
      }
    }
  }
`;

/**
 * __useGetMarathonChallengeQuery__
 *
 * To run a query within a React component, call `useGetMarathonChallengeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMarathonChallengeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMarathonChallengeQuery({
 *   variables: {
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGetMarathonChallengeQuery(
  baseOptions: Apollo.QueryHookOptions<GetMarathonChallengeQuery, GetMarathonChallengeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMarathonChallengeQuery, GetMarathonChallengeQueryVariables>(
    GetMarathonChallengeDocument,
    options,
  );
}
export function useGetMarathonChallengeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMarathonChallengeQuery, GetMarathonChallengeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMarathonChallengeQuery, GetMarathonChallengeQueryVariables>(
    GetMarathonChallengeDocument,
    options,
  );
}
export type GetMarathonChallengeQueryHookResult = ReturnType<typeof useGetMarathonChallengeQuery>;
export type GetMarathonChallengeLazyQueryHookResult = ReturnType<typeof useGetMarathonChallengeLazyQuery>;
export type GetMarathonChallengeQueryResult = Apollo.QueryResult<
  GetMarathonChallengeQuery,
  GetMarathonChallengeQueryVariables
>;
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, options);
}
export function useGetMembersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMembersQuery, GetMembersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, options);
}
export type GetMembersQueryHookResult = ReturnType<typeof useGetMembersQuery>;
export type GetMembersLazyQueryHookResult = ReturnType<typeof useGetMembersLazyQuery>;
export type GetMembersQueryResult = Apollo.QueryResult<GetMembersQuery, GetMembersQueryVariables>;
export const GetNewGamesDocument = gql`
  query getNewGames {
    assetCollection(where: { contentfulMetadata: { tags: { id_contains_all: ["newGame"] } } }) {
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
export function useGetNewGamesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetNewGamesQuery, GetNewGamesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNewGamesQuery, GetNewGamesQueryVariables>(GetNewGamesDocument, options);
}
export function useGetNewGamesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetNewGamesQuery, GetNewGamesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetNewGamesQuery, GetNewGamesQueryVariables>(GetNewGamesDocument, options);
}
export type GetNewGamesQueryHookResult = ReturnType<typeof useGetNewGamesQuery>;
export type GetNewGamesLazyQueryHookResult = ReturnType<typeof useGetNewGamesLazyQuery>;
export type GetNewGamesQueryResult = Apollo.QueryResult<GetNewGamesQuery, GetNewGamesQueryVariables>;
export const GetNumberPricesDocument = gql`
  query getNumberPrices($currentCounter: Int!) {
    numberpriceCollection(limit: 2, where: { number_gt: $currentCounter }) {
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
export function useGetNumberPricesQuery(
  baseOptions: Apollo.QueryHookOptions<GetNumberPricesQuery, GetNumberPricesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNumberPricesQuery, GetNumberPricesQueryVariables>(GetNumberPricesDocument, options);
}
export function useGetNumberPricesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetNumberPricesQuery, GetNumberPricesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
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
export function useGetPracticalItemsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPracticalItemsQuery, GetPracticalItemsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPracticalItemsQuery, GetPracticalItemsQueryVariables>(GetPracticalItemsDocument, options);
}
export function useGetPracticalItemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPracticalItemsQuery, GetPracticalItemsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPracticalItemsQuery, GetPracticalItemsQueryVariables>(
    GetPracticalItemsDocument,
    options,
  );
}
export type GetPracticalItemsQueryHookResult = ReturnType<typeof useGetPracticalItemsQuery>;
export type GetPracticalItemsLazyQueryHookResult = ReturnType<typeof useGetPracticalItemsLazyQuery>;
export type GetPracticalItemsQueryResult = Apollo.QueryResult<GetPracticalItemsQuery, GetPracticalItemsQueryVariables>;
