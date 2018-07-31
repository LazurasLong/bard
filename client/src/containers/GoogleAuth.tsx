import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';

interface Props { }

interface State {
  id: string;
  isAuthorized: boolean;
}

const GET_USER = gql`
  query user($id: String!) {
    user(id: $id) {
      name
    }
  }
`;

export default class extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      id: '',
      isAuthorized: true,
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`${window.location.origin}/auth${window.location.search}`);
      const json = await res.json();
      const { sub, email, token } = json;
      const userInfo = {
        id: sub,
        email,
        token,
        isAuthorized: true
      };

      window.localStorage.setItem('bard-auth', JSON.stringify(userInfo));

      this.setState({
        id: sub,
        isAuthorized: true
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { id, isAuthorized } = this.state;

    return (
      <Query query={GET_USER} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return null;

          if (error) return `Error!: ${error}`;

          if (!data.user) {
            return <Redirect to="/create-user" />
          }

          return <Redirect to="/dashboard" />;
        }}
      </Query>
    );
  }
}