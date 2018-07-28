
import * as uuid from 'uuid/v4';
import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import Form from '../components/Form';
import Link from '../components/Link';
import Submit from '../components/Submit';
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
    }
  }

  handleChange(e) {
    event.preventDefault();
  }

  render() {
    let input: any;

    return (
      <Mutation mutation={CREATE_USER}>
        {(createUser, { data }) => (
          <div>
            <Form
              onSubmit={e => {
                e.preventDefault();
                createUser({ variables: 
                  { 
                    id: uuid(),
                    name: input.value
                  } 
                });

                input.value = "";

                this.setState({
                  hasSubmittedUsername: true
                });
              }}
            >
              <input ref={node => {
                input = node;
              }} onChange={this.handleChange} required />
              <Submit type="Submit" value="Submit" />
            </Form>
            { this.state.hasSubmittedUsername &&
              <Link to="/adventures">Start an adventure!</Link>
            }
          </div>
        )}
      </Mutation>
    )
  }
}

export default CreateUser;