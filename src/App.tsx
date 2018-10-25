import React from 'react';
import Hello from './Hello';
import Widget from './Widget';
import CSSDemos from './CSSDemos';

const App = () =>
  <div>
    <Hello compiler='TypeScript' framework='React' />
    <CSSDemos />
    <Widget />
  </div>

export default App