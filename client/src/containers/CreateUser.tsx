import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import Form from '../components/Form';
import Submit from '../components/Submit';

const CREATE_USER = gql`
  mutation createUser($id: String!, $name: String!) {
    createUser(id: $id, name: $name) {
      id,
      name
    }
  }
`;

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
                  id: '123',
                  name: input.value
                } 
              });
              input.value = "";
            }}
          >
            <input ref={node => {
              input = node;
            }} />
            <input type="submit" value="submit" />
          </Form>
        </div>
      )}
    </Mutation>
  );
};