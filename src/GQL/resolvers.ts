import { ApolloError } from "apollo-server-express";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connection = require("../database/dbConfig");
const dbAccess = require("knex-db-access");
const userdb = new dbAccess(connection, "users");
require("dotenv").config();

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
      const salt = await bcrypt.genSaltSync(10);
      const hash = await bcrypt.hashSync(password, salt);

      await userdb.create({ username, password: hash, name });

      const user = await userdb.findBy({ username });

      const payload = {
        id: user.id,
      };

      const options = {
        expiresIn: "1h",
      };

      const secret = process.env.JWT_SECRET;

      const token = await jwt.sign(payload, secret, options);

      return { ...user, token };
    },
  },
};

export default resolvers;
