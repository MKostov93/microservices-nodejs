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

  extend type Mutation {
    createListing(title: String!, description: String!): Listing!
    deleteListing(listingId: ID!): Boolean!
  }
`;

export default listingsTypeDefs;
