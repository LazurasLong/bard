
import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Auth } from '../types';

import Form from '../components/Form';
import Link from '../components/Link';
import Submit from '../components/Submit';

interface Input {
  value: string
}

interface Props { }

interface State {
  auth: Auth,
  username: string,
  hasSubmittedUsername: boolean
}

const CREATE_USER = gql`
  mutation createUser($id: String!, $name: String!, $email: String!) {
    createUser(id: $id, name: $name, email: $email) {
      id,
      name,
      email
    }
  }
`;

class CreateUser extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      auth: {},
      username: '',
      hasSubmittedUsername: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const auth = window.localStorage.getItem('bard-auth');
    const authJSON = JSON.parse(auth);

    this.setState({ auth: authJSON });
  }


  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      username: event.currentTarget.value
    })
  }

  render() {
    let input: Input;
    const { id, email } = this.state.auth;

    return (
      <Mutation mutation={CREATE_USER}>
        {(createUser, { data }) => (
          <React.Fragment>
            <Form
              onSubmit={e => {
                e.preventDefault();

                createUser({
                  variables:
                  {
                    id,
                    email,
                    name: input.value,
                  }
                });

                this.setState({
                  hasSubmittedUsername: true
                });
              }}
            >
              <input ref={node => {
                input = node;
              }} onChange={this.handleChange} required />

              <Submit disabled={this.state.username.length < 1} type="Submit" value="Submit" />
            </Form>
            {this.state.hasSubmittedUsername &&
              <Link to="/adventures">Start an adventure!</Link>
            }
          </React.Fragment>
        )}
      </Mutation>
    )
  }
}

export default CreateUser;