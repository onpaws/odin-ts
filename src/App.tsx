import React from 'react';
import { AuthProvider } from './useAuth';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
