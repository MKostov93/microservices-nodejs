/**
 * EXTERNAL DEPENDENCIES.
 */
import styled from "styled-components";

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 0.25rem;
    border: 1px solid ${({ theme }) => theme.veryLightGrey};
    font-size: 0.9rem;
`;

export default Input;