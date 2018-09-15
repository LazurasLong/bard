import * as express from "express";
import * as bodyParser from "body-parser";
import OAuth from "./oauth";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./data/schema";

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.use("/auth", (req, res) => {
  const auth = new OAuth(req.query);

  auth
    .makeRequest()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.error(err);
    });
});

// app.use("/graphql", bodyParser.json());
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

app.listen(8080);
