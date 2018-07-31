import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

interface Props { }

export default class extends React.Component<Props> {

  async componentDidMount() {

    try {
      const res = await fetch(`${window.location.origin}/auth${window.location.search}`);
      const json = await res.json();
      const { sub, email } = json;

      const userInfo = { sub, email };

      window.localStorage.setItem('token', JSON.stringify(userInfo));
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return <React.Fragment />
  }
}