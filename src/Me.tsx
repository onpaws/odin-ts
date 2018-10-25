import React from 'react';
import { Query } from 'react-apollo';
import {meQuery} from './graphql/queries/me'

const Me = () =>
  <div>
    <Query query={meQuery}>
      {({ loading, error, data }) => {
        if (loading) return <h1>Loading...</h1>;
        if (error || !data.me) return <h1>Error :(</h1>;

        const {email} = data.me;
        return (
          <div>Email: {email}</div>
        )
      }}
    </Query>
  </div>

export default Me