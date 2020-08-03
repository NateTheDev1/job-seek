import { ApolloError } from "apollo-server-express";

const connection = require("../database/dbConfig");
const dbAccess = require("knex-db-access");
const userdb = new dbAccess(connection, "users");

const resolvers = {
  Query: {
    user: async (_: any, { id }: { id: String }) => {
      const user = await userdb.findBy({ id: id });
      return user;
    },
    users: async (__: any, _: any) => {
      const users = await userdb.find();
      return users;
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
