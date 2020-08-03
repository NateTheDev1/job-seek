import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    users: [User]!
    user(id: ID!): User
  }

  type User {
    id: ID
    name: String
    username: String
    password: String
    createdAt: String
    token: String
  }

  type Mutation {
    addUser(name: String, username: String, password: String): User
  }
`;

export default typeDefs;
