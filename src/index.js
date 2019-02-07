import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import App from './App';
import Spinner from './spinner';
import client from './Apollo';
import * as serviceWorker from './serviceWorker';

// .createRoot enables concurrent React
ReactDOM.unstable_createRoot(document.getElementById('root')).render(
  <React.Suspense fallback={<Spinner />}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.Suspense>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
