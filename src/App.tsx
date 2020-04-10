import React, { useState, useEffect } from 'react';
// import Layout from './Layout';
import { setAccessToken } from './accessToken';
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
      const { access_token } = await response.json();
      setAccessToken(access_token);
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
      <Login />
      <hr />
      {showTodos && <Todos />}
      <button onClick={()=> {toggleShowTodos(!showTodos)}}>toggle todos</button>
      {/* <Layout /> */}
    </div>
  )
}


export default App
