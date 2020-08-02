import { ApolloError } from "apollo-server-express";

const connection = require("../database/dbConfig");
const dbAccess = require("knex-db-access");
const userdb = new dbAccess(connection, "users");

const resolvers = {
  Query: {
    user: (_: any, { id }: { id: String }) => {
      userdb
        .findBy({ id })
        .then((user: Object) => {
          return user;
        })
        .catch((err: Object) => {
          return "User Not Found";
        });
    },
  },
  Mutation: {
    addUser: async (
      _: any,
      {
        name,
        username,
        password,
      }: { name: String; username: String; password: String }
    ) => {
      await userdb.create({ username, password, name });

      const user = userdb.findBy({ username });
      return user;
    },
  },
};

export default resolvers;
