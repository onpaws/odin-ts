import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';
import Spinner from './spinner';
import client from './Apollo';
import ErrorBoundary from './ErrorBoundary';

// .createRoot enables concurrent React
ReactDOM.unstable_createRoot(document.getElementById('root')).render(
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
