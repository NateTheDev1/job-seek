import {
  ApolloServer,
  ApolloError,
  AuthenticationError,
} from "apollo-server-express";
import { typeDefs as Queries } from "./typeDefs/Defs";
import resolvers from "./resolvers/resolvers";
const jwt = require("jsonwebtoken");

export const server = new ApolloServer({
  typeDefs: Queries,
  resolvers,
  context: async ({ req, res }) => {
    const token = req.headers.authorization || "";
    if (token.length < 1) {
      throw new AuthenticationError("No Token Present");
    } else {
      const secret = process.env.JWT_SECRET;
      const decoded = await jwt.verify(token, secret);

      if (!decoded) {
        throw new AuthenticationError("Invalid Token");
      }
    }

    return {};
  },
});
