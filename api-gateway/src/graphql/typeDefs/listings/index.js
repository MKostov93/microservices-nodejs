/**
 * EXTERNAL DEPENDENCIES.
 */
import { gql } from "apollo-server";

const listingsTypeDefs = gql`
  type Listing {
    id: ID!
    title: String!
    description: String!
  }

  extend type Query {
    listings: [Listing!]!
  }
`;

export default listingsTypeDefs;
