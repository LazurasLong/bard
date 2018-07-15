import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import Form from '../components/Form';
import Submit from '../components/Submit';

interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
}
// interface FormEvent extends React.FormEvent<HTMLInputElement> {
//   currentTarget: any;
// }

const CREATE_USER = gql`
  {
    mutation createUser($name: String!) {
      createUser(name: $name) {
        name
      }
    }
  }
`;

export default () => (
  <Mutation mutation={CREATE_USER}>
   {(createUser, { data }) => (
     <Form onSubmit={e => {
       let input: Input;

       e.preventDefault();
       createUser({ variables: { name: input.value }});
       input.value = '';
     }}>
      <input 
        ref={node => {
          // input = node;
        }} />
        <Submit>Create User</Submit>
     </Form>
   )}
  </Mutation>
);