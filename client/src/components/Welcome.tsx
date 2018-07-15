import * as React from 'react';

import Title from './Title';
import Link from './Link';
import CenteredWrapper from './CenteredWrapper';

interface Props {
  user?: any
};

export default function Welcome({ user }: Props) {
  return (
    <CenteredWrapper>
      { user ? (
        <Title>Welcome back, { user }!</Title>
      ) : (
        <React.Fragment>
          <Title>What is your name?</Title>
          <Link to="/create-user">Let's begin</Link>
        </React.Fragment>
      )}
    </CenteredWrapper>
  );
}
