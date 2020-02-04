/**
 * EXTERNAL DEPENDENCIES.
 */
import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from 'react-apollo';

/**
 * MUTATIONS.
 */
import { DELETE_USER_SESSION } from 'api/mutation/authentication';

/**
 * ACTIONS.
 */
import {
    authLogoutRequest,
    authLogoutSuccess
} from 'store/modules/Authentication/actions';

/**
 * COMPONENTS
 */
import Button from 'components/UI/Button/Button';

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

const Account = () => {
    const session = useSelector(state => state.auth.session);
    const dispatch = useDispatch();
    const [deleteUserSession] = useMutation(DELETE_USER_SESSION);

    const onDeleteUserSession = (event) => {
        event.preventDefault();

        dispatch(authLogoutRequest());

        dispatch(authLogoutSuccess());

        deleteUserSession({ variables: { sessionId: session.id } });
    };

    return (
        <AccountContiainer>
            <AccountBody>
                Logged in as
                <AccountInfo>{session.user.email}</AccountInfo>
            </AccountBody>

            <AccountActions>
                <Button
                    className="btn-block"
                    onClick={onDeleteUserSession}>
                    Sign Out
                </Button>
            </AccountActions>
        </AccountContiainer>
    );
}

export default Account;
