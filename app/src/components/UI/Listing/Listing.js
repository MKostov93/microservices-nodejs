/**
 * EXTERNAL DEPENDENCIES.
 */
import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

/**
 * COMPONENTS.
 */
import Button from 'components/UI/Button/Button';

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
Title.displayName = 'Title';

const Description = styled.p`
  margin-bottom: 0;
`;
Description.displayName = 'Description';

const Listing = ({
  listing: { title, description },
  onDelete
}) => {
  const session = useSelector(state => state?.auth?.session);

  return (
    <ListingContainer>
      <Title>{title}</Title>

      <Description>{description}</Description>

      {session && <Button onClick={onDelete}>Delete</Button>}
    </ListingContainer>
  );
};

export default Listing;
