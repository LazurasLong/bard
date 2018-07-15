import * as React from 'react';

interface Props {
  adventures: Array<Object>
}

export default function Adventures({ adventures }: Props) {
  if (!adventures) {
    return <p>No adventures!</p>
  };

  // return this.adventures.map(;
}