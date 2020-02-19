/**
 * EXTERNAL DEPENDENCIES.
 */
import gql from 'graphql-tag';

export const CREATE_LISTING = gql`
    mutation($title: String!, $description: String!) {
        createListing(title: $title, description: $description) {
            id,
            title,
            description
        }
    }
`;

export const DELETE_LISTING = gql`
    mutation($listingId: ID!) {
        deleteListing(listingId: $listingId)
    }
`;