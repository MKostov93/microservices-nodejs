/**
 * EXTERNAL DEPENDENCIES.
 */
import styled from "styled-components";

const Button = styled.button`
    display: inline-block;
    padding: 0.5rem;
    border: 0;
    background-color: ${({ theme }) => theme.mortar};
    cursor: pointer;
    color: #fff;

    &:not(:first-child) {
        margin-top: 0.25rem;
    }

    &:disabled {
        pointer-events: none;
        opacity: 0.3;
    }

    &.btn-block {
        display: block;
        width: 100%;
    }
`;

export default Button;