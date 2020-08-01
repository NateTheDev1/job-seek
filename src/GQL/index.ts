import { ApolloServer } from "apollo-server-express";
import { typeDefs as Queries } from "./typeDefs/Defs";
import resolvers from "./resolvers/resolvers";

export const server = new ApolloServer({
  typeDefs: Queries,
  resolvers,
});
