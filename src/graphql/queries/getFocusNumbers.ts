import { gql } from '@apollo/client';

export const QUERY_GET_FOCUS_NUMBERS = gql`
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
