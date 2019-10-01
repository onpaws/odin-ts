import gql from 'graphql-tag';
import { userFragment } from "../fragments/userFragment";

export const ME_QUERY = gql`
  query MeQuery {
    me {
      ...UserInfo
    }
  }
  ${userFragment}
`;