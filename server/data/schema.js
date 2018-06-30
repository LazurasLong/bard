const { makeExecutableSchema } = require('graphql-tools');

const users = [
  {
    id: 1,
    username: 'Kevin',
    adventures: [],
    isAdmin: true,
  }
];

const typeDefs = `
  type User {
    id: Int!,
    username: String,
    isAdmin: Boolean,
    adventures: [Adventure]
  }

  type Users {
    users: [User]
  }

  type Adventure { 
    id: Int!,
    title: String,
    number: Int,
    campaign: String 
  }

  type Query { 
    users: [User],
    user: User,
    adventures: [Adventure],
  }
`;

const resolvers = {
  Query: { 
    users: () => users,
    adventures: () => adventures,
    user: (_, { id }) => find(user, { id }),
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});