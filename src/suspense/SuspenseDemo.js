import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Spinner from '../spinner';

const Suspenders = lazy(() => import('./Suspenders'));

const SuspenseDemo = () =>
  <div>
    <ErrorBoundary>
      <Suspense maxDuration={1000} fallback={<Spinner />}>
        <Suspenders />
      </Suspense>
    </ErrorBoundary>
  </div>

export default SuspenseDemo
