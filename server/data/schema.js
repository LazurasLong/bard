const find = require('lodash/find');
const { makeExecutableSchema } = require('graphql-tools');

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
    user(id: Int!): User
    adventures: [Adventure],
  }
`;

const resolvers = {
  Query: { 
    adventures: () => adventures,
    user: (_, { id }) => find(users, { id }),
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});