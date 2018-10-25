import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styles from './Widget.module.css';

const GET_SHIPS = gql`
  {
    allStarships {
      id
      name
      passengers
    }
  }
`

const Ships = () =>
  <div className={styles.parent}>
    <h2>Ships</h2>
    <Query query={GET_SHIPS}>
      {({ loading, error, data }) => {
          if (loading) return <h1>Loading...</h1>;
          if (error) return <h1>Error</h1>;

          return data.allStarships.map((ship: any) => 
            <Ship key={ship.id} {...ship} />
          );
        }}
    </Query>
  </div>

const Ship = (props: any) => 
  <div>
    <h4>{props.name}</h4>
    <p>Passengers: {props.passengers}</p>
  </div>

export default Ships