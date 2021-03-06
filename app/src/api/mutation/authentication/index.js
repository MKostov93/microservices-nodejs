/**
 * EXTERNAL DEPENDENCIES.
 */
import gql from 'graphql-tag';

export const CREATE_USER = gql`
    mutation($email: String!, $password: String!) {
        createUser(email: $email, password: $password) {
            id
        }
    }
`;

export const CREATE_USER_SESSION = gql`
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

export const DELETE_USER_SESSION = gql`
    mutation($sessionId: ID!) {
        deleteUserSession(sessionId: $sessionId)
    }
`;