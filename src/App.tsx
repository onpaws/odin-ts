import React from 'react';
import Hello from './Hello';
import CSSDemos from './CSSDemos';
import Me from './Me';

const App = () =>
  <div>
    <Hello compiler='TypeScript' framework='React' />
    <CSSDemos />
    <Me />
  </div>

export default App