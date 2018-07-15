const express = require('express');
const bodyParser = require('body-parser');
const schema = require('./data/schema');

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const app = express();

app.use(
  '/graphql', 
  bodyParser.json(), 
  graphqlExpress({ schema })
);

app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(8080);
