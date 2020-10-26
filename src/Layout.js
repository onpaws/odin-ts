import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './useAuth';
import Spinner from './spinner';
import Login from './Login';
import JSONBlobs from './JSONBlobs';
import Food from './Food';
import { Home, Memo, HookStateAndEffect, HookReducerDemo, HookMemoDemo, HookDeepTree } from './Pages';
import Hello from './Hello';
import { wrapper, header, nav, content, sidebar, footer } from './Layout.module.css';

const Layout = () => {
  const { loading } = useAuth();

  if (loading) {
    return <Spinner />
  }

  return (
    <div className={wrapper}>
      <header className={header}>
        <Hello compiler='TypeScript' framework='React' />
      </header>
      <nav className={nav}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/food'>Food</Link></li>
          <li><Link to='/blahs'>Blahs</Link></li>
          <li><Link to='/memo'>React.memo</Link></li>
          <li><Link to='/hook'>Hook: useState, useEffect</Link></li>
          <li><Link to='/hook-reducer'>Hook: useReducer</Link></li>
          <li><Link to='/hook-memo'>Hook: Memo (filter)</Link></li>
          <li><Link to='/hook-deep-tree'>Hook: Passing dispatch with Context</Link></li>
          {/* <li><Link to='/lazy-suspense'>React.Suspense &amp; React.lazy</Link></li> */}
        </ul>
      </nav>
      <article className={content}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/food' element={<Food />} />
          <Route path='/blahs' element={<JSONBlobs />} />
          <Route path='/memo' element={<Memo />} />
          <Route path='/hook' element={<HookStateAndEffect />} />
          <Route path='hook-reducer' element={<HookReducerDemo />} />
          <Route path='/hook-memo' element={<HookMemoDemo />}/>
          <Route path='/hook-deep-tree' element={<HookDeepTree />} />
          {/* <Route path='/lazy-suspense' element={<LazySuspense />} /> */}
        </Routes>

      </article>
      <aside className={sidebar}>
        <Routes>
          <Route path='/memo' element={<MemoSidebar />} />
          <Route path='/hook' element={<HookStateSidebar />} />
          <Route path='/hook-deep-tree' element={<HookDeepTreeSidebar />}/>
        </Routes>
      </aside>
      <footer className={footer}>
        &copy; 2019, 2020 Patrick Skinner
    </footer>
    </div>
  )
}


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
    <p>useState &amp; useEffect</p>
    <p>For useEffect, to clean up a side effect e.g. setTimeout(), you can optionally return a function (e.g. clearTimeout())</p>
  </div>

const HookDeepTreeSidebar = () =>
  <div>
    <p>This is the original Hook demo.</p>
    <p>useState &amp; useEffect</p>
    <p>For useEffect, to clean up a side effect e.g. setTimeout(), you can optionally return a function (e.g. clearTimeout())</p>
  </div>
