import * as React from 'react';
import * as actions from '../store/actions';

import Welcome from "../components/Welcome";
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

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
