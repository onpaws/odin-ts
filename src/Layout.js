import React from 'react';
import { Link, Router } from '@reach/router';
import { Home, Memo, HookStateAndEffect, HookReducerDemo, HookMemoDemo, HookDeepTree, LazySuspense  } from './Pages';
import Hello from './Hello';
import { wrapper, header, nav, content, sidebar, footer } from './Layout.module.css';

const Layout = () =>
  <div className={wrapper}>
    <header className={header}>
      <Hello compiler='TypeScript' framework='React' />
    </header>
    <nav className={nav}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/memo'>React.memo</Link></li>
        <li><Link to='/hook'>Hook: useState, useEffect</Link></li>
        <li><Link to='/hook-reducer'>Hook: useReducer</Link></li>
        <li><Link to='/hook-memo'>Hook: Memo (filter)</Link></li>
        <li><Link to='/hook-deep-tree'>Hook: Passing dispatch with Context</Link></li>
        <li><Link to='/lazy-suspense'>React.Suspense &amp; React.lazy</Link></li>
        
      </ul>
    </nav>
    <article className={content}>
      <Router>
        <Home path='/' />
        <Memo path='/memo' />
        <HookStateAndEffect path='/hook' />
        <HookReducerDemo path='hook-reducer' />
        <HookMemoDemo path='/hook-memo' />
        <HookDeepTree path='/hook-deep-tree' />
        <LazySuspense path='/lazy-suspense' />
      </Router>
    </article>
    <aside className={sidebar}>
      <Router>
        <MemoSidebar path='/memo' />
        <HookStateSidebar path='/hook' />
        <HookDeepTreeSidebar path='/hook-deep-tree' />
      </Router>
    </aside>
    <footer className={footer}>
      &copy; 2019 Patrick Skinner
    </footer>
  </div>

export default Layout

const MemoSidebar = () => 
  <div>
    <p>The first component is a 'pure functional' component and re-renders whenever its props change, just like usual.</p>
    <p>Meanwhile we used React.memo for the second compoment. This tells React to cache based on a shallow prop comparison so React won't re-render.</p>
    <p>If a shallow comparison isn't enough, you can pass to React.memo() an equality function as an optional second param.</p>
  </div>

const HookStateSidebar = () => 
  <div>
    <p>This is the original Hook demo.</p>
    <p>useState & useEffect</p>
    <p>For useEffect, to clean up a side effect e.g. setTimeout(), you can optionally return a function (e.g. clearTimeout())</p>
  </div>

const HookDeepTreeSidebar = () => 
  <div>
    <p>This is the original Hook demo.</p>
    <p>useState & useEffect</p>
    <p>For useEffect, to clean up a side effect e.g. setTimeout(), you can optionally return a function (e.g. clearTimeout())</p>
  </div>
