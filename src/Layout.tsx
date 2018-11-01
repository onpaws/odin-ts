import * as React from 'react';
import Card from './card';
import Hello from './Hello';
import Hook from './Hook';
import Suspense from './suspense';
import {RegularDemo, MemoDemo} from './memo';

const Layout = () =>
  <div>
    <nav></nav>
    <section>
      <Hello compiler='TypeScript' framework='React' />
      <Card title={'I\'m getting Hooked'}>
        <Hook />
      </Card>
      <Card title={'This Laziness is keeping me in Suspense'}>
        <Suspense />
      </Card>
      <Card title={'Regular pure function demo'}>
        <RegularDemo />
      </Card>
      <Card title={'Memoized pure function demo'}>
        <MemoDemo />
      </Card>
    </section>
  </div>

export default Layout