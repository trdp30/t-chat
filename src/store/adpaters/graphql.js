import { ApolloClient, InMemoryCache } from "@apollo/client";

function InitApolloClient() {
  return new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    cache: new InMemoryCache()
  });
}

const client = InitApolloClient();

export const resetApolloInstance = async () => {
  await client.clearCache();
};

export default client;
