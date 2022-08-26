import { gql } from '@apollo/client';

export const QUERY_GET_CONSUMPTIONS = gql`
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
