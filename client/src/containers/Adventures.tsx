import * as React from 'react';
import Adventures from '../components/Adventures';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_ADVENTURES = gql`
  {
    adventures {
      title
    }
  }
`;

export default () => (
  <Query query={GET_ADVENTURES}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <Adventures adventures={data.adventures} />
      );
    }}
  </Query>
);