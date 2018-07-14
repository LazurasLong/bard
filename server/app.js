const express = require('express');
const apollo = require('apollo-server-express');
const bodyParser = require('body-parser');
const schema = require('./data/schema');
const cors = require('cors');

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}

app.use(
  '/graphql', 
  bodyParser.json(), 
  graphqlExpress({ schema })
);

app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3000);
