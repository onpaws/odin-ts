import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { onError } from 'apollo-link-error';
import { getMainDefinition } from 'apollo-utilities';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
  credentials: 'include'
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000',
  options: {
    reconnect: true,
  },
});

const networkLink = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        '[GraphQL error]: Message:', message, 'Location(s):', locations, 'Path:', path
      ),
    );
  if (networkError) console.warn(
    '[Network error]:', networkError, 'Operation:', operation.operationName
  );
});

// Set up Cache
const cache = new InMemoryCache();

// Initialize the Apollo Client
const client = new ApolloClient({
  link: ApolloLink.from([
    errorLink,
    networkLink,
  ]),
  cache,
});

export default client;