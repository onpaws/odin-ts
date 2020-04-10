import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const TODO_QUERY = gql`
query {
  todos
}
`;


const Todos = () => {
  const { loading, error, data } = useQuery(TODO_QUERY, {fetchPolicy: 'network-only'});
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>Must log in</h4>;
  
  const { todos } = data;
  
  return (
    <div>
      <p>Todos: {JSON.stringify(todos)}</p>
    </div>
  )
}

export default Todos