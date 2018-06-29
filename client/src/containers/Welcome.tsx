import * as React from 'react';
import * as actions from '../store/actions';
import { UserState, StoreState } from '../store/types';

import Welcome from "../components/Welcome";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface FormEvent extends React.FormEvent<HTMLInputElement> {
  currentTarget: any;
}

export function mapStateToProps({ user }: StoreState) {
  return { user };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.UsernameAction>) {
  return {
    setUsername: (event: FormEvent): void => {
      event.preventDefault();
      const user: UserState = {
        username: event.currentTarget.username.value,
        usernameExists: true
      };
      dispatch(actions.setUsername(user));
    }
  };
}

export const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome)
