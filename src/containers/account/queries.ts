import { gql } from 'graphql-request';

export const GET_ACCOUNT_DETAILS_QUERY = gql`
  query getAccountDetails($id: String!) {
    getAccountDetails(id: $id) {
      accountId
      accountName
      sanctuaryId
      sanctuaryName
    }
  }
`;
