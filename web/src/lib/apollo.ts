import {ApolloClient, InMemoryCache} from '@apollo/client';

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api-sa-east-1.hygraph.com/v2/cl8ul4tfv5von01uq7r88ahum/master"
});