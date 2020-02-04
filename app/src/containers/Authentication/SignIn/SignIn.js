/**
 * EXTERNAL DEPENDENCIES.
 */
import React from 'react';

import { useForm } from 'react-hook-form';
import { useMutation } from 'react-apollo';
import { useSelector, useDispatch } from 'react-redux';

/**
 * MUTATIONS.
 */
import { CREATE_USER_SESSION } from 'api/mutation/authentication';

/**
 * ACTIONS.
 */
import {
    authRequest,
    authSuccess,
    authFailure,
} from 'store/modules/Authentication/actions';

/**
 * COMPONENTS.
 */
import Error from 'components/UI/Error/Error';
import Button from 'components/UI/Button/Button';
import Input from 'components/UI/Form/Input';
import Label from 'components/UI/Form/Label';
import FormRow from 'components/UI/Form/FormRow';

const SignIn = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    const [createUserSession] = useMutation(CREATE_USER_SESSION);
    const {
        formState: { isSubmitting },
        handleSubmit,
        register
    } = useForm();

    const onSubmit = handleSubmit(async ({ email, password }) => {
        try {
            const {
                data: {
                    createUserSession: createdSession
                }
            } = await createUserSession({
                variables: {
                    email,
                    password
                }
            });

            dispatch(authRequest());

            if (createdSession) {
                dispatch(authSuccess(createdSession));
            }

        } catch (err) {
            dispatch(authFailure(err.graphQLErrors[0]));
        }
    });

    return (
        <form onSubmit={onSubmit}>
            <FormRow>
                <Label htmlFor="field-email">Email</Label>

                <Input
                    disabled={isSubmitting}
                    id="field-email"
                    type="email"
                    name="email"
                    ref={register} />
            </FormRow>

            <FormRow>
                <Label htmlFor="field-password">Password</Label>

                <Input
                    disabled={isSubmitting}
                    id="field-password"
                    type="password"
                    name="password"
                    ref={register}
                    autoComplete="new-password" />
            </FormRow>

            {error && (
                <FormRow>
                    <Error>{error.message}</Error>
                </FormRow>
            )}

            <FormRow>
                <Button
                    disabled={isSubmitting}
                    type="submit">
                    Sign In
                </Button>
            </FormRow>
        </form>
    );
}

export default SignIn;