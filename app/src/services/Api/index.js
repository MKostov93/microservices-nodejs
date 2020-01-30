/**
 * EXTERNAL DEPENDENCIES.
 */
import gql from 'graphql-tag';

/**
 * GRAPHQL CLIENT.
 */
import graphqlClient from "config/graphqlClient";

class Api {
  constructor(client) {
    this.client = client;
  }

  static createUserSession({ email, password }) {
    const graphqlQuery = gql`
      mutation($email: String!, $password: String!) {
        createUserSession(email: $email, password: $password) {
          id,
          user {
            id,
            email
          }
        }
      }
    `;

    return this.client
      .post('/graphql', graphqlQuery);
  }
}

export default new Api(graphqlClient);
