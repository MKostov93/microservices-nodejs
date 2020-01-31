/**
 * EXTERNAL DEPENDENCIES.
 */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

/**
 * STYLES.
 */
const AccountContiainer = styled.div`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.mortar};
`;

const AccountInfo = styled.div`
    margin-top: 0.25rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.nero};
`;

const Account = () => {
    const session = useSelector(state => state.auth.session);

    return (
        <AccountContiainer>
            Logged in as
            <AccountInfo>{session.user.email}</AccountInfo>
        </AccountContiainer>
    );
}

export default Account;
