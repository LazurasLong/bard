const find = require('lodash/find');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
  type User {
    id: String!,
    name: String!,
    isAdmin: Boolean,
    adventures: [Adventure]
  }

  type Users {
    users: [User]
  }

  type Adventure { 
    id: String!,
    title: String,
    number: Int,
    campaign: String 
  }

  type Query { 
    users: [User],
    user(id: Int!): User
    adventures: [Adventure],
  }

  type Mutation {
    createUser (
      id: String!
      name: String!
    ): User
  }
`;

const resolvers = {
  Query: { 
    user: (_, { name }) => find(users, { id }),
  },
  
  Mutation: {
    createUser: (_, { id, name }) => {
      return { id, name };
    }
  }
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});