import * as React from 'react';
import * as actions from '../actions/';

import Welcome from "../components/Welcome";
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

interface FormEvent extends React.FormEvent<HTMLInputElement> {
  currentTarget: any;
}

export function mapStateToProps({ username, usernameExists }: StoreState) {
  return {
    username,
    usernameExists
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.UsernameAction>) {
  return {
    setUsername: (event: FormEvent): void => {
      event.preventDefault();
      dispatch(actions.setUsername(event.currentTarget.username.value));
    }
  };
}

export const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome)
