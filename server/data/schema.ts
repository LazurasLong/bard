import db from '../db';
import find from 'lodash/find';
import { makeExecutableSchema } from 'graphql-tools';

const CLIENT_ID = process.env.CLIENT_ID;
const SECRET = process.env.SECRET;
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
    OAuth: OAuth,
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
    OAuth: () => OAuth,
    users: async () => await getUsers(),
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
