/**
 * EXTERNAL DEPENDENCIES.
 */
import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENTS.
 */
import Account from './Account/Account';
import SignIn from './SignIn/SignIn';

const Authentication = () => {
    const session = useSelector(state => state.auth.session);

    return session ? <Account /> : <SignIn />;
}

export default Authentication;
