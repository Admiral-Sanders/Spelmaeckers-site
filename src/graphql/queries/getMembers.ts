import { gql } from "@apollo/client";

export const QUERY_GET_MEMBERS = gql`
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
