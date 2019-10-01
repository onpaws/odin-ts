import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ME_QUERY } from './graphql/queries/me'

const Me = () => {
  const { loading, error, data } = useQuery(ME_QUERY);
  if (loading) return <h1>Loading...</h1>;
  if (error || !data.me) return <h1>Error :(</h1>;
  
  const { me: { email } } = data;
  
  return (
    <div>Email: {email}</div>
  )
}

export default Me