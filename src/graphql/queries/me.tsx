import { gql } from '@apollo/client';
import { userFragment } from "../fragments/userFragment";

export const ME_QUERY = gql`
  query MeQuery {
    me {
      ...UserInfo
    }
  }
  ${userFragment}
`;