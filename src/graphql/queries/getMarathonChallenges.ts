import { gql } from '@apollo/client';

export const QUERY_GET_MARATHON_CHALLENGES = gql`
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
