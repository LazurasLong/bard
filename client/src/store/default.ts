import { User, Adventures } from '../types';

interface Defaults {
  user: User,
  adventures: Adventures
}

export const defaults: Defaults = {
  user: {
    __typename: 'User',
    id: "",
    username: "",
  },
  adventures: {
    __typename: 'Adventure',
    adventures: []
  }
};

export const resolvers = {
  Query: {
    user: (_: any, users: any) => users
  }
};