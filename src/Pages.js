import React from 'react';
import Card from './card';
import { MemoDemo } from './memo';
import Suspense from './suspense';
import { StateAndEffectHookInput, HookReducer, HookMemo, DeepTreeDemo } from './hooks';

export const Home = () =>
  <div>
    <p>Welcome to Odin, a demo of certain latest-gen technologies.</p>
    <p>React tech: Hooks, Memo, Suspense, StrictMode, Concurrent mode</p>
    <p>Other: TypeScript, CSS Modules, Apollo 3.0, CSS Grid</p>
    <ul>
      <li>Dan Abramov's <a href="https://codesandbox.io/s/r76q199xxn">Movie Demo</a> (clone) from JSConf March 2018</li>
      <li>React v16.6 <a href="https://codesandbox.io/s/w0n9ok3mqw">Suspense Demo</a> from Nov 2018</li>
    </ul>
  </div>

export const Memo = () =>
  <div>
    <Card title={'Regular pure function vs memoized demo'}>
      <MemoDemo />
    </Card>
  </div>

export const HookStateAndEffect = () =>
  <Card title={'Hooked on <input> (useState & useEffect)'}>
    <StateAndEffectHookInput />
  </Card>

export const LazySuspense = () =>
  <Card title={'This Laziness is keeping me in Suspense'}>
    <Suspense />
  </Card>

export const HookReducerDemo = () =>
  <Card title={'Hook Reducer'}>
    <HookReducer />
  </Card>

export const HookDeepTree = () =>
  <div>
    <Card title={'React.createContext provides dispatch in deep trees'}>
      <DeepTreeDemo />
    </Card>
  </div>


export const HookMemoDemo = () =>
  <Card title={'Hook Memo'}>
    <HookMemo />
  </Card>