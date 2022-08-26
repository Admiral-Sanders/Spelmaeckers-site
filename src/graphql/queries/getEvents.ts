import { gql } from '@apollo/client';

export const QUERY_GET_EVENTS = gql`
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
