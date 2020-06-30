import React from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
const ME_QUERY = loader('./graphql/queries/me.gql');

const Me = () => {
  const { loading, error, data } = useQuery(ME_QUERY);
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>Error / not logged in</h4>;
  
  const { me: { email } } = data;
  
  return (
    <div>
      <p>Email: {email}</p>
    </div>
  )
}

export default Me