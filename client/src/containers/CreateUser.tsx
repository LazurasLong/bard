
import * as uuid from 'uuid/v4';
import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import Form from '../components/Form';
import Link from '../components/Link';
import Submit from '../components/Submit';
import { InputHTMLAttributes } from 'react';
interface Props {}
interface State {
  username: string,
  hasSubmittedUsername: boolean
}

const CREATE_USER = gql`
  mutation createUser($id: String!, $name: String!) {
    createUser(id: $id, name: $name) {
      id,
      name
    }
  }
`;

class CreateUser extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      hasSubmittedUsername: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      username: event.currentTarget.value
    })
  }

  render() {
    let input: any;

    return (
      <Mutation mutation={CREATE_USER}>
        {(createUser, { data }) => (
          <React.Fragment>
            <Form
              onSubmit={e => {
                e.preventDefault();

                createUser({ variables: 
                  { 
                    id: uuid(),
                    name: input.value
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

              <Submit disabled={this.state.username.length < 1 } type="Submit" value="Submit" />
            </Form>
            { this.state.hasSubmittedUsername &&
              <Link to="/adventures">Start an adventure!</Link>
            }
          </React.Fragment>
        )}
      </Mutation>
    )
  }
}

export default CreateUser;