import * as express from 'express';
import * as bodyParser from 'body-parser';
import schema from './data/schema';
import OAuth from './oauth';
import { nextTick } from '../node_modules/@types/async';

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const app = express();

app.use('/auth', (req, res) => {
  const auth = new OAuth(req.query);

  auth.makeRequest()
    .then(response => {
      res.json(response);
      res.redirect('http://localhost:3000/dashboard');
    });
});

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema })
);

app.get(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
);

app.listen(8080);
