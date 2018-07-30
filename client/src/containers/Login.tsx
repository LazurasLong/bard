import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import CenteredWrapper from '../components/CenteredWrapper';

interface Props { }

interface State {
  username: string
}

const GET_GOOGLE_URL = gql`
  {
    OAuth {
      googleUrl
    }
  }
`;

export default class extends React.Component<Props, State> {
  constuctor() {
    this.state = {
      username: ''
    };
  }

  render() {
    return (
      <Query query={GET_GOOGLE_URL}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error: ${error.message}`;

          return (
            <a href={data.OAuth.googleUrl}>Sign in with Google</a>
          )
        }}
      </Query>
    )
  }
}