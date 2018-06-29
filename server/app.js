const express = require('express');
const apollo = require('apollo-server-express');
const bodyParser = require('body-parser');

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const app = express();

const adventures = [
  {
    title: 'Ravencall Tower',
    number: 1,
    campaign: 'Ley of the Land'
  },
  {
    title: 'The Holder Below',
    number: 2,
    campaign: 'Ley of the Land'
  }
];

const typeDefs = `
  type Adventure { 
    title: String, 
    number: Int, 
    campaign: String 
  }

  type Query { 
    adventures: [Adventure] 
  }
`

const resolvers = {
  Query: { adventures: () => adventures },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3000);