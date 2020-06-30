import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, split, Observable } from '@apollo/client';
// import { relayStylePagination } from "@apollo/client/utilities" // see InMemoryCache below
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
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/graphql',
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
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      if (err.extensions) {
        // switch (err.extensions.code) {
          // case 'UNAUTHENTICATED': {
          //   // error code is set to UNAUTHENTICATED
          //   // when AuthenticationError thrown in resolver
          //   console.log('unauthed. lets fetch an access token!')
          //   fetchToken().then((token) => {
          //     console.log('fetchToken returned', token)
          //     // modify the operation context with a new token
          //     const oldHeaders = operation.getContext().headers;
          //     console.log('oldHeaders', oldHeaders)
          //     operation.setContext({
          //       headers: {
          //         ...oldHeaders,
          //         Authorization: `Bearer: ${token}`,
          //       },
          //     });
          //     console.table('operation', operation);
          //     console.table('operation.getContext()', operation.getContext());
          //     // retry the request, returning the new observable
          //     return forward(operation);
          //   })
          // }
          // default: {
            console.error(
              '[GraphQL error]: Message:', err.message, 'Location(s):', err.locations, 'Path:', err.path
            )
          // }
        }
      }
    }
  if (networkError)  {
    console.warn('[Network error]:', networkError, 'Operation:', operation.operationName);
  }
});

const tokenLink = new TokenRefreshLink({
  isTokenValidOrUndefined: () => {
    const token = getAccessToken();

    if (!token) {
      return true;
    }

    try {
      const { exp } = jwtDecode(token);
      if (Date.now() >= exp * 1000) {
        return false;
      } else {
        return true;
      }
    } catch (err) {
      return false;
    }
  },
  fetchAccessToken: () => fetch("http://localhost:4000/access_token", {
    method: "POST",
    credentials: "include"
  }),
  handleFetch: (access_token: string) => {
    setAccessToken(access_token);
  },
  handleError: (err: any) => {
    console.warn("Your refresh token is invalid. Please try re-logging in.");
    console.error(err);
  },
});

// see https://github.com/apollographql/apollo-client/commit/48df9da1d9a51c514ce3872cc3310ed683535221
const cache = new InMemoryCache({
  // typePolicies: {
  //   Query: {
  //     fields: {
  //       // Keep searches separated by args.query (but not by any other
  //       // arguments, since the field policy will handle them).
  //       foods: relayStylePagination([]),
  //     },
  //   },
  // },
})

// Initialize the Apollo Client
const client = new ApolloClient({
  link: ApolloLink.from([
    tokenLink,
    errorLink,
    requestLink,
    networkLink,
  ]),
  cache
});

export default client;