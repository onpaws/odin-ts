import { ApolloClient, ApolloLink, HttpLink, split, Observable } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { WebSocketLink } from '@apollo/link-ws';
import { onError } from '@apollo/link-error';
import { getMainDefinition } from 'apollo-utilities';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';
import { getAccessToken, setAccessToken } from './accessToken';

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle: any;
      Promise.resolve(operation).then(operation => {
        const accessToken = getAccessToken();
        if (accessToken) {
          operation.setContext({
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
        }
      })
      .then(() => {
        handle = forward && forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer)
        });
      })
      .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
  credentials: 'include'
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000',
  options: {
    reconnect: true
  }
});

interface Definition {
  kind: string;
  operation?: string;
};

const networkLink = split(  // split based on operation type
  ({ query }) => {
    const { kind, operation }: Definition = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
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
    // new TokenRefreshLink({
    //   accessTokenField: "accessToken",
    //   isTokenValidOrUndefined: () => {
    //     const token = getAccessToken();

    //     if (!token) {
    //       return true;
    //     }

    //     try {
    //       const { exp } = jwtDecode(token);
    //       if (Date.now() >= exp * 1000) {
    //         return false;
    //       } else {
    //         return true;
    //       }
    //     } catch (err) {
    //       return false;
    //     }
    //   },
    //   fetchAccessToken: () => {
    //     return fetch("http://localhost:4000/refresh_token", {
    //       method: "POST",
    //       credentials: "include"
    //     })
    //   },
    //   handleFetch: accessToken => {
    //     setAccessToken(accessToken);
    //   },
    //   handleError: err => {
    //     console.warn("Your refresh token is invalid. Please try re-logging in.");
    //     console.error(err);
    //   }
    // }),
    errorLink,
    requestLink,
    networkLink,
  ]),
  cache,
});

export default client;