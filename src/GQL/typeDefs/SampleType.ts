import { gql } from "apollo-server-express";

const SampleType = gql`
  type Query {
    hello: String!
    cats: [Cat!]!
  }

  type Cat {
    id: ID!
    name: String!
  }

  type Mutation {
    createCat(name: String!): Cat!
  }
`;
export default SampleType;
