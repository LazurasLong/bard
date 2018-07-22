import db from '../db';
import find from 'lodash/find';
import { makeExecutableSchema } from 'graphql-tools';

let users: Array<Object> = [];

const typeDefs = `
  type User {
    id: String!,
    name: String!,
    isAdmin: Boolean,
    adventures: [Adventure]
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

async function getUsers() {
  try {
    const res = await db.query(`SELECT * from users`);

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
}

async function insertUser(id, name) {
  try {
    const res = await db.query(`INSERT INTO users VALUES('${id}', '${name}', ${false});`);

    return res;
  } catch (err) {
    throw new Error('User already exists');
  }
}

const resolvers = {
  Query: { 
    users: async () =>  await getUsers(),
    user: (_, { id }) => find(users, { id }),
  },
  
  Mutation: {
    createUser: (_, { id, name }) => {
      insertUser(id, name);
      return { id, name };
    }
  }
};

export default makeExecutableSchema({
  typeDefs,
  resolvers
});