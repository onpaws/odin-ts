import * as React from 'react';
import { Link, Router } from '@reach/router';
import { Home, Memo, HookStateAndEffect, HookReducerDemo, HookMemoDemo, LazySuspense } from './Pages';
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
        <li><Link to='/hook'>HookStateAndEffect</Link></li>
        <li><Link to='/hook-reducer'>HookReducer</Link></li>
        <li><Link to='/hook-memo'>HookMemo</Link></li>
        <li><Link to='/lazy-suspense'>React.Suspense & React.lazy</Link></li>
      </ul>
    </nav>
    <article className={content}>
      <Router>
        <Home path='/' />
        <Memo path='/memo' />
        <HookStateAndEffect path='/hook' />
        <HookReducerDemo path='hook-reducer' />
        <HookMemoDemo path='/hook-memo' />
        <LazySuspense path='/lazy-suspense' />
      </Router>
    </article>
    <aside className={sidebar}>
      <Router>
        <MemoSidebar path='memo' />
      </Router>
    </aside>
    <footer className={footer}>
      &copy; 2018 Patrick Skinner
    </footer>
  </div>

export default Layout

const MemoSidebar = () => 
  <div>
    <p>One component uses a memo to avoid re-renders...</p>
  </div>