import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { setAccessToken } from './accessToken';
import Me from './Me';
import Login from './Login';
import Todos from './Todos';
import Spinner from './spinner';

const App = () => {
  const [showTodos, toggleShowTodos] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include"
    }).then(async response => {
      const { accessToken } = await response.json();
      setAccessToken(accessToken);
      setLoading(false);
    }).catch(err => {
      console.error(err)
    });
  }, []);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      {/* <Me /> */}
      {showTodos && <Todos />}
      <button onClick={()=> {toggleShowTodos(!showTodos)}}>todos</button>
      <Login />
      <Layout />
    </div>
  )
}


export default App
