/**
 * EXTERNAL DEPENDENCIES.
 */
import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "react-apollo";

/**
 * MUTATIONS.
 */
import { DELETE_USER_SESSION } from "api/mutation/authentication";

/**
 * ACTIONS.
 */
import {
  authLogoutRequest,
  authLogoutSuccess
} from "store/modules/Authentication/actions";

/**
 * SELECTORS.
 */
import { getSession } from "store/modules/Authentication/selectors";

/**
 * COMPONENTS
 */
import Button from "components/UI/Button/Button";

/**
 * STYLES.
 */
const AccountContiainer = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.mortar};
`;

const AccountBody = styled.div`
  display: block;
`;

const AccountInfo = styled.div`
  margin-top: 0.25rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.nero};
`;

const AccountActions = styled.div`
  margin-top: 0.25rem;
`;

const Account: React.FC = () => {
  const session = useSelector(getSession);
  const dispatch = useDispatch();
  const [deleteUserSession] = useMutation(DELETE_USER_SESSION);

  const onDeleteUserSession = (event: React.SyntheticEvent) => {
    event.preventDefault();

    dispatch(authLogoutRequest());

    deleteUserSession({ variables: { sessionId: session?.id } });

    dispatch(authLogoutSuccess());
  };

  return (
    <AccountContiainer>
      <AccountBody>
        Logged in as
        <AccountInfo>{session?.user?.email}</AccountInfo>
      </AccountBody>

      <AccountActions>
        <Button className="btn-block" onClick={onDeleteUserSession}>
          Sign Out
        </Button>
      </AccountActions>
    </AccountContiainer>
  );
};

export default Account;
