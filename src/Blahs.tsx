import React from 'react';
import { useBlahsQuery } from './generated/graphql';


const Blahs = () => {
  const { loading, error, data = {} } = useBlahsQuery({fetchPolicy: 'network-only'});
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>{error.toString()}</h4>;
  
  const { blahs } = data;
  
  return (
    <div>
      <p>Blahs: {JSON.stringify(blahs)}</p>
    </div>
  )
}

export default Blahs