import { gql } from "@apollo/client";

export const QUERY_GET_NUMBER_PRICES = gql`
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
