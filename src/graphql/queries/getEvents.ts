import { gql } from "@apollo/client";

export const QUERY_GET_EVENTS = gql`
  query getEvents($now: DateTime!) {
    eventCollection(where: { to_gte: $now }) {
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
