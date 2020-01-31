/**
 * EXTERNAL DEPENDENCIES.
 */
import { gql } from "apollo-server";

const authTypeDefs = gql`
  scalar Date

  type User {
    id: ID!
    email: String!
  }

  type UserSession {
    id: ID!
    createdAt: Date!
    expiresAt: Date!
    user: User!
  }

  extend type Query {
    userSession(me: Boolean!): UserSession
  }

  extend type Mutation {
    createUser(email: String!, password: String!): User!
    createUserSession(email: String!, password: String!): UserSession!
    deleteUserSession(sessionId: ID!): Boolean!
  }
`;

export default authTypeDefs;
