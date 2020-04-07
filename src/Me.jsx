import React from 'react';
import { useQuery } from '@apollo/client';
import { ME_QUERY } from './graphql/queries/me'

const Me = () => {
  const { loading, error, data } = useQuery(ME_QUERY);
  if (loading) return <h4>Loading...</h4>;
  if (error || !data.me) return <h4>Not logged in</h4>;
  
  const { me: { email } } = data;
  
  return (
    <div>
      <p>Email: {email}</p>
    </div>
  )
}

export default Me