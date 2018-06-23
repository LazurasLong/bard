import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  border-bottom: 1px solid green;
`;

export default class App extends React.Component {
  render() {
    return <Title>Hello there!</Title>;
  }
}
