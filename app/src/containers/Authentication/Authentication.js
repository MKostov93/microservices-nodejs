/**
 * EXTERNAL DEPENDENCIES.
 */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENTS.
 */
import Button from 'components/UI/Button/Button';
import Account from './Account/Account';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Authentication = () => {
    const [isSignup, setIsSignup] = useState(false);
    const session = useSelector(state => state.auth.session);

    if (session) {
        return <Account />;
    }

    const handleSwitchAuthMode = () => { setIsSignup(!isSignup) };

    return (
        <>
            {isSignup ? <SignIn /> : <SignUp />}

            <Button
                type="button"
                onClick={handleSwitchAuthMode}>
                Switch to {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
        </>
    );
}

export default Authentication;
