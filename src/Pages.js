import React from 'react';
import Card from './card';
import { RegularDemo, MemoDemo } from './memo';
import Suspense from './suspense';
import { StateAndEffectHookInput, HookReducer, HookMemo, DeepTreeDemo } from './hooks';

export const Home = () =>
  <div>
    <h4>Home</h4>
    <p>Welcome to Odin, a demo of latest-gen React technologies.</p>
    <p>Hooks, Memo, Suspense, Concurrent mode</p>
  </div>

export const Memo = () =>
  <div>
    <Card title={'Regular pure function demo'}>
      <RegularDemo />
    </Card>
    <Card title={'Memoized pure function demo'}>
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