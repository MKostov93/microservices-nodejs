/**
* EXTERNAL DEPENDENCIES.
*/
import { gql } from "apollo-server";

/**
* TYPE DEFS.
*/
import authTypeDefs from './authentication';
import listingsTypeDefs from './listings';

const rootTypeDefs = gql`
    type Query {
        root: String
    }

    type Mutation {
        root: String
    }
`;

const typeDefs = [
    rootTypeDefs,
    authTypeDefs,
    listingsTypeDefs
];

export default typeDefs;
