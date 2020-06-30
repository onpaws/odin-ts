import { gql } from '@apollo/client';

export const FOOD_QUERY = gql`
query FoodQuery($first: Int, $cursor: Cursor) {
  foods(first: $first, after: $cursor) {
    totalCount
    edges {
      node {
        cuisine
        address
        notes
        rating
        price  
      }
    }
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
  }
}
`