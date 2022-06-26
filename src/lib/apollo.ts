import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_APOLLO_GRAPH_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APOLLO_GRAPH_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
