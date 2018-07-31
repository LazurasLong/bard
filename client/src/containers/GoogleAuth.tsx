import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

interface Props { }

export default class extends React.Component<Props> {

  componentDidMount() {
    fetch(`${window.location.origin}/auth`).then(res => console.log(res));
  }

  render() {
    return <div />;
  }
}