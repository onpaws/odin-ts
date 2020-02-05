import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { setAccessToken } from './accessToken';
import Me from './Me';
import Spinner from './spinner';

const App = () => {
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
      <Layout />
      <Me />
    </div>
  )
}


export default App
