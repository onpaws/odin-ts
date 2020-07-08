import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { setAccessToken } from './accessToken';
const LOGIN_MUTATION = loader('./graphql/mutations/login.gql');

const Login: React.FC = () => {
  const [email, setEmail] = useState('bob@bob.com');
  const [password, setPassword] = useState('bob@bob.com');
  const [login, { loading: mutationLoading, error: mutationError }] = useMutation(LOGIN_MUTATION, {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
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
          const { data: { authenticate2: jwtToken } } = response;
          console.log('>', jwtToken);
          setAccessToken(jwtToken);
          setEmail('');
          setPassword('');
        }
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