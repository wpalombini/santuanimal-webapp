import { GraphQLClient } from 'graphql-request';
import { getApiUrl } from 'lib/config';
import { getUserTokenId } from './firebase';

const getGraphQLClient = async () => {
  const endpoint = getApiUrl();

  const graphQLClient = new GraphQLClient(endpoint);

  const token = await getUserTokenId();

  if (token) {
    graphQLClient.setHeader('Authorization', `Bearer ${token}`);
  }

  return graphQLClient;
};

export default getGraphQLClient;
