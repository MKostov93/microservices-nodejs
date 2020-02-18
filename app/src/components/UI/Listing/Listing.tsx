/**
 * EXTERNAL DEPENDENCIES.
 */
import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

/**
 * SELECTORS.
 */
import { isSignedIn } from "store/modules/Authentication/selectors";

/**
 * COMPONENTS.
 */
import Button from "components/UI/Button/Button";

/**
 * MODELS.
 */
import { IListingProps } from "models/Listing";

/**
 * STYLES.
 */
const ListingContainer = styled.div`
  padding: 1rem 0;

  :not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.veryLightGrey};
  }
`;

const Title = styled.h4`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Description = styled.p`
  margin-bottom: 0;
`;

const Listing: React.FC<IListingProps> = ({
  listing: { title, description },
  onDelete
}) => {
  const isAuthenticated = useSelector(isSignedIn);

  return (
    <ListingContainer>
      <Title>{title}</Title>

      <Description>{description}</Description>

      {isAuthenticated && <Button onClick={onDelete}>Delete</Button>}
    </ListingContainer>
  );
};

export default Listing;
