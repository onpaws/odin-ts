import * as React from 'react';
import Card from './card';
import Hello from './Hello';
import Hook from './Hook';
import SuspenseDemo from './suspense/SuspenseDemo';

const Layout = () =>
  <div>
    <nav></nav>
    <section>
      <Hello compiler='TypeScript' framework='React' />
      <Card title={'I\'m getting Hooked'}>
        <Hook />
      </Card>
      <Card title={'It\'s Suspenseful in here'}>
        <SuspenseDemo />
      </Card>
    </section>
  </div>

export default Layout