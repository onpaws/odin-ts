import React from 'react';
import { useFoodsQuery } from './generated/graphql';

const FoodData = () => {
  const { loading, error, data = {}, fetchMore } = useFoodsQuery({
    variables: { first: 1 }, // cursor var is null by default, will be set by onLoadMore
    // fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true
  });
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>{error.toString()}</h4>
  const { foods } = data;

  return (
    <Food entries={foods} onLoadMore={() => fetchMore({ variables: { cursor: foods?.pageInfo.endCursor } })} />
  )
}

const Food: React.FC<{ entries: any, onLoadMore: ()=>{} }> = ({ entries, onLoadMore }) =>
  <div>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
      <div><button onClick={onLoadMore} disabled={!entries.pageInfo.hasNextPage}>load</button></div>
      <div>entries loaded: {entries && entries.edges && entries.edges.length.toString()} / {entries?.totalCount}</div>
      <div>hasNextPage: {entries.pageInfo.hasNextPage.toString()}</div>
      <div>endCursor: {entries.pageInfo.endCursor.toString()}</div>
    </div>
    {/* <pre>{JSON.stringify(entries, null, 2)}</pre> */}
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
      {entries.edges.map(({ node: { id, cuisine, address, notes } }: any) =>
        <div style={{ display: 'flex'}} key={id}>
          <div>{cuisine}</div>
          <div>{address}</div>
          <div>{notes}</div>
        </div>
      )}
    </div>

  </div>

export default FoodData