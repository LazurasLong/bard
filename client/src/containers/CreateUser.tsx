
import * as uuid from 'uuid/v4';
import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import createHistory from 'history/createBrowserHistory';

import Form from '../components/Form';
import Submit from '../components/Submit';

const history = createHistory();

const CREATE_USER = gql`
  mutation createUser($id: String!, $name: String!) {
    createUser(id: $id, name: $name) {
      id,
      name
    }
  }
`;

const handleSubmit = (event: React.SyntheticEvent) => {
  history.push('/adventures');
}; 

export default () => {
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
              handleSubmit(e);
            }}
          >
            <input ref={node => {
              input = node;
            }} required />
            <Submit type="Submit" value="Submit" />
          </Form>
        </div>
      )}
    </Mutation>
  );
};