import * as React from 'react';
import Hello from './Hello';
import Widget from './Widget';

const App = (props) =>
  <div>
    <Hello compiler='TypeScript' framework='React' />
    <Widget />
  </div>

export default App