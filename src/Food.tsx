import React from 'react';
import { useQuery } from '@apollo/client';
import { FOOD_QUERY } from './graphql/queries/foods'

const FoodData = () => {
  const { loading, error, data, fetchMore } = useQuery(FOOD_QUERY, {
    variables: { first: 1, cursor: null },
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true
  });
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>Error: {error}</h4>;
  
  const { foods } = data;

  return (
    <Food entries={foods}
      onLoadMore={() => {
        fetchMore({ variables: { cursor: foods.pageInfo.endCursor },
          updateQuery: (previousResult, { fetchMoreResult }: {fetchMoreResult?: any}) => {
            const { foods: { edges: newEdges, pageInfo, totalCount} } = fetchMoreResult;

            return newEdges.length
              ? {
                  // Put the new foods at the end of the list and update `pageInfo`
                  // so we have the new `endCursor` and `hasNextPage` values
                  foods: {
                    __typename: previousResult.foods.__typename,
                    edges: [...previousResult.foods.edges, ...newEdges],
                    pageInfo,
                    totalCount
                  }
                }
              : previousResult;
            }
          });
      }}
    />
  )
}

const Food: React.FC<{entries: any, onLoadMore: any}> = ({entries, onLoadMore}) =>
  <div>
    <p>
      entries: {entries && entries.edges && entries.edges.length.toString()} <br />
      hasNextPage: {entries.pageInfo.hasNextPage.toString()}
    </p>
    <button onClick={onLoadMore}>load</button>
    <pre>{JSON.stringify(entries, null, 2)}</pre>
    
  </div>

export default FoodData