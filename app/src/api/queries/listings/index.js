/**
 * EXTERNAL DEPENDENCIES.
 */
import gql from 'graphql-tag';

export const LISTINGS = gql`
    {
        listings {
            id,
            title,
            description
        }
    }
`;