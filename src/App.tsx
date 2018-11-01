import * as React from 'react';
import Hello from './Hello';
import Hook from './Hook'
import SuspenseDemo from './suspense/SuspenseDemo';

const App = () =>
  <div>
    <Hello compiler='TypeScript' framework='React' />
    <h5>I'm Getting Hooked</h5>
    <Hook />
    <h5>Suspense</h5>
    <SuspenseDemo />
  </div>

export default App