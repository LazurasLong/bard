import ApolloClient from 'apollo-boost';
import { defaults, resolvers } from "./store/default";

export default new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  clientState: {
    defaults,
    resolvers,
  }
});
