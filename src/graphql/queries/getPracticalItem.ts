import { gql } from "@apollo/client";

export const QUERY_GET_PRACTICAL_ITEMS = gql`
  query getPracticalItems {
    practicalItemCollection {
      total
      items {
        title
        description {
          json
        }
        icon
      }
    }
  }
`;
