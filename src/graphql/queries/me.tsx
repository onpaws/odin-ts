import gql from 'graphql-tag';
import { userFragment } from "../fragments/userFragment";

export const meQuery = gql`
  query MeQuery {
    me {
      ...UserInfo
    }
  }
  ${userFragment}
`;