/**
 * EXTERNAL DEPENDENCIES.
 */
import styled from "styled-components";

const Button = styled.button`
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 0;
    background-color: ${({ theme }) => theme.mortar};
    color: #fff;

    &:not(:first-child) {
        margin-top: 0.25rem;
    }
`;

export default Button;