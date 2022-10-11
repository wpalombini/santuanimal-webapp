import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getApiUrl } from 'lib/config';
import { getUserTokenId } from './';

const httpLink = new HttpLink({
  uri: getApiUrl(),
});

const authMiddleware = setContext(async (_, { headers }) => {
  const token = await getUserTokenId();
  if (token) {
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authMiddleware.concat(httpLink),
});
