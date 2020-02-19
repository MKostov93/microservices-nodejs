/**
 * EXTERNAL DEPENDENCIES.
 */
import gql from 'graphql-tag';

export const USER_SESSION = gql`
    {
        userSession(me: true) {
            id,
            user {
                id,
                email
            }
        }
    }
`;