import * as React from 'react';
import { Dispatch } from 'redux';
import { UserState } from '../store/types';

import Label from './Label';
import Title from './Title';
import Link from './Link';
import Input from './Input';
import Submit from './Submit';
import Form from './Form';
import CenteredWrapper from './CenteredWrapper';

export interface Props {
  user?: UserState,
  setUsername?: Dispatch;
}

export default function Welcome({ user, setUsername }: Props) {
  console.log(user);
  return (
    <CenteredWrapper>
      { user.usernameExists ? (
        <React.Fragment>
          <Title>Welcome back, {user.username}!</Title>
          <Link to="/adventures">Adventures</Link>
        </React.Fragment>
      ) : (
        <Form onSubmit={setUsername}>
          <Label htmlFor="username">What is your name?</Label>
          <Input id="username" name="username" required />
          <Submit type="Submit" />
        </Form>
      )}
    </CenteredWrapper>
  );
}
