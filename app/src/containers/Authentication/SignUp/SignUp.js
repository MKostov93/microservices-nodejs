/**
 * EXTERNAL DEPENDENCIES.
 */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-apollo';
import * as yup from 'yup';

/**
 * MUTATIONS.
 */
import { CREATE_USER_MUTATION } from 'api/mutation/authentication';

/**
 * COMPONENTS.
 */
import Button from 'components/UI/Button/Button';
import Input from 'components/UI/Form/Input';
import Label from 'components/UI/Form/Label';
import FormRow from 'components/UI/Form/FormRow';

const validationSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup
        .string()
        .required()
        .test(
            "sameAsConfirmPassword",
            "${path} is not the same as the confirmation password",
            function () {
                return this.parent.password === this.parent.confirmPassword;
            }
        )
});

const SignUp = ({ onRedirectToLogin }) => {
    const [createUser] = useMutation(CREATE_USER_MUTATION);
    const {
        formState: { isSubmitting, isValid },
        handleSubmit,
        register,
        reset
    } = useForm({ mode: 'onChange', validationSchema });

    const onSubmit = handleSubmit(async ({ email, password }) => {
        await createUser({ variables: { email, password } });

        reset();

        onRedirectToLogin();
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
                <Label htmlFor="field-confirm-password">Confirm Password</Label>

                <Input
                    disabled={isSubmitting}
                    id="field-confirm-password"
                    type="password"
                    name="confirmPassword"
                    ref={register}
                    autoComplete="new-password" />
            </FormRow>

            <FormRow>
                <Button
                    disabled={isSubmitting || !isValid}
                    type="submit">
                    Sign Up
                </Button>
            </FormRow>
        </form>
    );
}

export default SignUp;