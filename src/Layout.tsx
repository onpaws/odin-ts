import * as React from 'react';
import Card from './card';
import Hello from './Hello';
import {StateAndEffectHookInput} from './Hook';
import Suspense from './suspense';
import {RegularDemo, MemoDemo} from './memo';
import styles from './Layout.module.css';

const Layout = () =>
  <div>
    <header>
      <Hello compiler='TypeScript' framework='React' />
    </header>
    <section className={styles.cards}>
      <Card title={'Hooked on <input> (useState & useEffect)'}>
        <StateAndEffectHookInput />
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