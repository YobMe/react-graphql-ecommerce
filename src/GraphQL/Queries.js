import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      console.log(`Graphql error message ${message} ${location}`);
      console.log(`Graphql error location ${location}`);
      console.log(`Graphql error path ${path} `);
    });
  }
});
const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000/" })]);

// Setup client
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
