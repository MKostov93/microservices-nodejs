/**
 * GRAPHQL CLIENT.
 */
import graphqlClient from "config/graphqlClient";

class Api {
  constructor(client) {
    this.client = client;
  }
}

export default new Api(graphqlClient);
