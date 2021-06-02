import "./App.less";
import Navigation from "./navigation";
import { toast } from "react-toastify";
import React from "react";
import { ApolloProvider } from "@apollo/client/react";
import ApolloClientInstance from "./store/adapters/graphql";

toast.configure({
  position: "top-right"
});

function App() {
  return (
    <ApolloProvider client={ApolloClientInstance}>
      <Navigation />
    </ApolloProvider>
  );
}

export default App;
