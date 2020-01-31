/**
 * EXTERNAL DEPENDENCIES.
 */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-apollo';
import { useDispatch } from 'react-redux';

/**
 * MUTATIONS.
 */
import { CREATE_USER_SESSION_MUTATION } from 'api/mutation/authentication';

/**
 * ACTIONS.
 */
import {
    authStart,
    authFail,
    authSuccess
} from 'store/modules/Authentication/actions';

/**
 * COMPONENTS.
 */
import Button from 'components/UI/Button/Button';
import Input from 'components/UI/Form/Input';
import Label from 'components/UI/Form/Label';
import FormRow from 'components/UI/Form/FormRow';

const SignIn = () => {
    const dispatch = useDispatch();
    const [createUserSession, { error: mutationError }] = useMutation(CREATE_USER_SESSION_MUTATION);
    const {
        formState: { isSubmitting },
        handleSubmit,
        register
    } = useForm();

    const onSubmit = handleSubmit(async ({ email, password }) => {
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

        dispatch(authStart());

        if (mutationError) {
            dispatch(authFail(mutationError));
        }

        if (createdSession) {
            dispatch(authSuccess(createdSession));
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