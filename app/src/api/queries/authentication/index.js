/**
 * EXTERNAL DEPENDENCIES.
 */
import gql from 'graphql-tag';

export const USER_SESSION_QUERY = gql`
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