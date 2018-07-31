import db from '../db';
import { find } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

const CLIENT_ID = process.env.CLIENT_ID;
const SCOPE = encodeURIComponent('openid email');
const REDIRECT_URI = encodeURIComponent('http://localhost:3000/google');
const url: string = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&response_type=code&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`;

const OAuth = {
  googleUrl: url
};

let users: Array<Object> = [];

const typeDefs = `
  type OAuth {
    googleUrl: String
  }

  type User {
    id: String!
    name: String!
    email: String!
    isAdmin: Boolean
    adventures: [Adventure]
  }

  type Adventure { 
    id: String!
    title: String
    number: Int
    campaign: String 
  }

  type Query { 
    users: [User]
    OAuth: OAuth
    user(id: String!): User
    adventures: [Adventure]
  }

  type Mutation {
    createUser (
      id: String!
      name: String!
      email: String!
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

async function insertUser(id: string, name: string, email: string) {
  try {
    const res = await db.query(`INSERT INTO users VALUES('${id}', '${name}', ${false}, '${email}');`);

    return res;
  } catch (err) {
    throw new Error('User already exists');
  }
}

const resolvers = {
  Query: {
    OAuth: () => OAuth,
    users: async () => await getUsers(),
    user: (_, { id }) => find(users, { id }),
  },

  Mutation: {
    createUser: (_, { id, name, email }) => {
      insertUser(id, name, email);
      return { id, name, email };
    }
  }
};

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
