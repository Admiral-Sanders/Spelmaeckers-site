import { gql } from "@apollo/client";

export const QUERY_GET_NEW_GAMES = gql`
  query getNewGames {
    assetCollection(where: {contentfulMetadata: {tags: {id_contains_all: ["newGame"]}}}) {
      items {
        title
        url
      }
    }
  }
`;
