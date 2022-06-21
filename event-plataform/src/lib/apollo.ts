import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o3f3ts0d3k01z7hk0o2kri/master',
  cache: new InMemoryCache()
})