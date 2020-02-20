/**
 * EXTERNAL DEPENDENCIES.
 */
import React from 'react';

import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from "@apollo/react-hooks";

/**
 * MUTATIONS.
 */
import { CREATE_LISTING } from 'api/mutation/listings';

/**
 * ACTIONS.
 */
import {
    listingCreateRequest,
    listingCreateSuccess,
    listingCreateFailure,
} from 'store/modules/Listings/actions';

/**
 * SELECTORS.
 */
import { getError } from 'store/modules/Error/selectors';

/**
 * COMPONENTS.
 */
import Error from 'components/UI/Error/Error';
import Form from 'components/UI/Form/Form';
import FormRow from 'components/UI/Form/FormRow';
import Label from 'components/UI/Form/Label';
import Input from 'components/UI/Form/Input';
import Textarea from 'components/UI/Form/Textarea';
import Button from 'components/UI/Button/Button';

type CreateListingProps = {
    onCreateListing: () => void;
}

const CreateListing: React.FC<CreateListingProps> = ({ onCreateListing }) => {
    const dispatch = useDispatch();
    const error = useSelector(getError);
    const [createListing] = useMutation(CREATE_LISTING);
    const {
        formState: { isSubmitting },
        handleSubmit,
        register,
        reset
    } = useForm();

    const onSubmit = handleSubmit(async ({ title, description }) => {
        try {
            const {
                data: {
                    createListing: createdListing
                }
            } = await createListing({
                variables: {
                    title,
                    description
                }
            });

            reset();

            dispatch(listingCreateRequest());

            if (createdListing) {
                dispatch(listingCreateSuccess(createdListing));
            }

            onCreateListing();
        } catch (err) {
            dispatch(listingCreateFailure(err.graphQLErrors[0]));
        }
    });

    return (
        <Form onSubmit={onSubmit}>
            <FormRow>
                <Label htmlFor="field-title">Title</Label>

                <Input
                    id="field-title"
                    name="title"
                    type="text"
                    disabled={isSubmitting}
                    ref={register} />
            </FormRow>

            <FormRow>
                <Label htmlFor="field-description">Description</Label>

                <Textarea
                    id="field-description"
                    name="description"
                    disabled={isSubmitting}
                    ref={register} />
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
                    Create Listing
                </Button>
            </FormRow>
        </Form>
    );
};

export default CreateListing;
