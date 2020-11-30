import { ApolloClient, from } from "@apollo/client";
import dotenv from "dotenv";
import uri from "./uri";
import cache from "./cache";
import { getFromUrl, toast } from "@janda-com/front";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { onError } from "@apollo/client/link/error";

dotenv.config({
  path: "../.env",
});

const client = new ApolloClient({
  uri,
  cache,
});

export default client;
