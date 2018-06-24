import * as React from 'react';
import { Dispatch } from 'redux';

import Label from './Label';
import Title from './Title';
import Link from './Link';
import Input from './Input';
import Submit from './Submit';
import Form from './Form';
import CenteredWrapper from './CenteredWrapper';

export interface Props {
  username?: string;
  usernameExists?: boolean;
  setUsername?: Dispatch;
}

export default function Welcome({ username, usernameExists, setUsername }: Props) {
  return (
    <CenteredWrapper>
      { usernameExists ? (
        <React.Fragment>
          <Title>Welcome back, {username}!</Title>
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
