/**
 * EXTERNAL DEPENDENCIES.
 */
import React from 'react'
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-apollo';

/**
 * MUTATIONS.
 */
import { CREATE_USER_SESSION_MUTATION } from 'api/mutation/authentication';

/**
 * COMPONENTS.
 */
import Input from 'components/UI/Form/Input';
import Label from 'components/UI/Form/Label';
import FormRow from 'components/UI/Form/FormRow';

const Login = () => {
    const {
        formState: { isSubmitting },
        handleSubmit,
        register
    } = useForm();
    const [createUserSession] = useMutation(CREATE_USER_SESSION_MUTATION);

    const onSubmit = handleSubmit(async ({ email, password }) => {
        const result = await createUserSession({
            variables: {
                email,
                password
            }
        });

        console.log(result);
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
                <button type="submit">Login</button>
            </FormRow>
        </form>
    )
}

export default Login;