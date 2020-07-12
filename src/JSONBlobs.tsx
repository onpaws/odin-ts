import React from 'react';
import { useJsonBlobsQuery } from './generated/graphql';


const Blahs = () => {
  const { loading, error, data = {} } = useJsonBlobsQuery({fetchPolicy: 'network-only'});
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>{error.toString()}</h4>;
  
  const { jsonblobs } = data;
  
  return (
    <div>
      <p>JSON: {JSON.stringify(jsonblobs)}</p>
    </div>
  )
}

export default Blahs