import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from './graphql/mutations/login';
import { setAccessToken } from './accessToken';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { loading: mutationLoading, error: mutationError, client }] = useMutation(LOGIN_MUTATION, {
    onError: (err) => {console.log(err)},
  });
  
  return (
    <div>
      <form onSubmit={async (e)=>{
        e.preventDefault()
        const response = await login({
          variables: { email, password }
        });

        if (response) {
          const { data: { accessToken } } = response;
          setAccessToken(accessToken);
        }
        console.log('client', client)
      }}>
      
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button type="submit" disabled={mutationLoading}>login</button>
      {mutationError && <p>Error. Please try again</p>}
      </form>
    </div>
  )
}

export default Login