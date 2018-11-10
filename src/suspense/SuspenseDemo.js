import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Spinner from '../spinner';

const Suspenders = lazy(() => import(/* webpackChunkName: "Suspenders" */ './Suspenders'));

const SuspenseDemo = () =>
  <div>
    <ErrorBoundary>
      <Suspense maxDuration={1000} fallback={<Spinner />}>
        <Suspenders />
      </Suspense>
      <p>(spinner expected to display for 1s)</p>
    </ErrorBoundary>
  </div>

export default SuspenseDemo
