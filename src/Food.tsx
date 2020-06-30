import React from 'react';
import { useQuery } from '@apollo/client';
import { FOOD_QUERY } from './graphql/queries/foods'

const FoodData = () => {
  const { loading, error, data, fetchMore } = useQuery(FOOD_QUERY, {
    variables: { first: 1 }, // cursor null by default, set by onLoadMore
    // fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true
  });
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>Error: {error}</h4>;

  const { foods } = data;

  return (
    <Food entries={foods}
      onLoadMore={() => fetchMore({ variables: { cursor: foods.pageInfo.endCursor } })}
    />
  )
}

const Food: React.FC<{ entries: any, onLoadMore: ()=>{} }> = ({ entries, onLoadMore }) =>
  <div>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
      <div><button onClick={onLoadMore} disabled={!entries.pageInfo.hasNextPage}>load</button></div>
      <div>entries loaded: {entries && entries.edges && entries.edges.length.toString()}</div>
      <div>hasNextPage: {entries.pageInfo.hasNextPage.toString()}</div>
      <div>endCursor: {entries.pageInfo.endCursor.toString()}</div>
    </div>
    <pre>{JSON.stringify(entries, null, 2)}</pre>
  </div>

export default FoodData