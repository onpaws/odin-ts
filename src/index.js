import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';
import Spinner from './spinner';
import client from './Apollo';
import ErrorBoundary from './ErrorBoundary';
import * as serviceWorker from './serviceWorker';

// .createRoot enables concurrent React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback={<Spinner />}>
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </ErrorBoundary>
    </React.Suspense>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
