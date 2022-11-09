import { getGraphQLClient, getUserId } from 'lib/utils';
import { useQuery } from 'react-query';
import { IAccountDetails } from './interfaces';
import { GET_ACCOUNT_DETAILS_QUERY } from './queries';

const getAccountDetailsApi = async (accountId: string): Promise<IAccountDetails> => {
  const graphQLClient = await getGraphQLClient();

  const variables = { id: accountId };
  const response = await graphQLClient.request(GET_ACCOUNT_DETAILS_QUERY, variables);

  console.log(response.getAccountDetails);

  return response.getAccountDetails as IAccountDetails;
};

const defaultConfig = {
  config: {
    staleTime: Infinity,
  },
};

export const useGetAccountDetails = ({ config } = defaultConfig) => {
  const accountId = getUserId() as string;

  return useQuery<IAccountDetails>({
    ...config,
    queryKey: ['accountDetails', accountId],
    queryFn: () => getAccountDetailsApi(accountId),
    enabled: !!accountId,
  });
};
