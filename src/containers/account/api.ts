import { apolloClient } from 'lib/utils';
import { IAccountReducerState } from './interfaces';
import { GET_ACCOUNT_DETAILS_QUERY } from './queries';

export const getAccountDetailsApi = async (accountId: string): Promise<IAccountReducerState> => {
  const response = await apolloClient.query({
    query: GET_ACCOUNT_DETAILS_QUERY,
    variables: {
      id: accountId,
    },
  });
  if (response?.errors) {
    throw response.errors;
  }

  return response?.data?.getAccountDetails;
};
