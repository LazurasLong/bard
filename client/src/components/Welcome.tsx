import * as React from 'react';
import { Dispatch } from 'redux';
import Title from './Title';
import Input from './Input';

export interface Props {
  username?: string;
  usernameExists?: boolean;
  setUsername?: Dispatch;
}

export default function Welcome({ username, usernameExists, setUsername }: Props) {
  return (
    <React.Fragment>
      <Title>Welcome</Title>
      <Input onChange={setUsername} />
    </React.Fragment>
  );
}
