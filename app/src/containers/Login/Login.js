/**
 * EXTERNAL DEPENDENCIES.
 */
import React from 'react'
import { useForm } from 'react-hook-form';

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

    const onSubmit = handleSubmit(({ email, password }) => {
        console.log(email, password);
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
        </form>
    )
}

export default Login;