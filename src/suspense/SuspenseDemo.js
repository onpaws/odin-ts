import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Spinner from '../spinner';

const Suspenders = lazy(() => import(/* webpackChunkName: "Suspenders" */ './Suspenders'));

const SuspenseDemo = () =>
  <div>
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Suspenders />
      </Suspense>
      <p>(spinner expected to display for 150ms)</p>
    </ErrorBoundary>
  </div>

export default SuspenseDemo
