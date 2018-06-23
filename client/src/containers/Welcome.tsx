import * as React from 'react';
import Title from "../components/Title";
import { StoreState } from '../types/index';
import { connect } from 'react-redux';

export function mapStateToProps({ username }: StoreState) {
  return {
    username
  };
}

const Welcome = (state: StoreState) => {
  if (state.usernameExists) {
    return <Title>Welcome, {state.username}!</Title>;
  }
  return <Title>What's your name?</Title>
}

export const WelcomeContainer = connect(mapStateToProps)(Welcome)
