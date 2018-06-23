import * as React from 'react';
import { Dispatch } from 'redux';
import Label from './Label';
import Title from './Title';
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
        <Title>Welcome back, {username}!</Title>
      ) : (
        <Form onSubmit={setUsername}>
          <Label htmlFor="username">What is your name?</Label>
          <Input id="username" name="username" />
          <Submit type="submit" value="Submit" />
        </Form>
      )}
    </CenteredWrapper>
  );
}
