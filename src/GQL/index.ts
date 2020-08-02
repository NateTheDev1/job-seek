import { ApolloServer, AuthenticationError } from "apollo-server-express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const jwt = require("jsonwebtoken");

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: async ({ req }) => {
  //   const token = req.headers.authorization || "";
  //   if (token.length < 1) {
  //     throw new AuthenticationError("No Token Present");
  //   } else {
  //     const secret = process.env.JWT_SECRET;
  //     const decoded = await jwt.verify(token, secret);

  //     if (!decoded) {
  //       throw new AuthenticationError("Invalid Token");
  //     }
  //   }

  //   return {};
  // },
});
