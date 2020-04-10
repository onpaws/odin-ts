import { gql } from '@apollo/client';

// leftover from a previous experiment as an FYI for how fragments work

export const userFragment = gql`
  fragment UserInfo on User {
    id
    email
  }
`;