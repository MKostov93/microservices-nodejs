/**
 * EXTERNAL DEPENDENCIES.
 */
import React, { useState } from 'react';

import { useSelector } from 'react-redux';

/**
 * SELECTORS.
 */
import { isSignedIn } from 'store/modules/Authentication/selectors';

/**
 * COMPONENTS.
 */
import Button from 'components/UI/Button/Button';
import Account from './Account/Account';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Authentication: React.FC = () => {
    const [isSignup, setIsSignup] = useState(false);
    const isAuthenticated = useSelector(isSignedIn);

    if (isAuthenticated) {
        return <Account />;
    }

    const handleSwitchAuthMode = () => { setIsSignup(!isSignup) };

    return (
        <>
            {isSignup ? <SignUp onRedirectToLogin={() => setIsSignup(false)} /> : <SignIn />}

            <Button
                type="button"
                onClick={handleSwitchAuthMode}
                className="btn-block">
                Switch to {isSignup ? 'Sign In' : 'Sign Up'}
            </Button>
        </>
    );
}

export default Authentication;
